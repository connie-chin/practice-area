/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me! */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware, authMiddleware } from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};
type Auth = {
  username: string;
  password: string;
};
type Todo = {
  entryId: number;
  title: string;
  notes: string;
  photoUrl: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  // registration
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password); // hash the users pw with `argon.hash()
    const sql = `
    insert into "users" ("username", "hashedPassword")
    values ($1, $2)
    returning "userId", "username", "createdAt";
    `; // insert the user's "username" and "hashedPassword" into the "users" table.
    const params = [username, hashedPassword];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    res.status(201).json(user); // Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
  } catch (err) {
    // catch any errors
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  // authentication
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
    select "userId", "hashedPassword"
    from "users"
    where "username" = $1;
    `; // query database to find userId and hashedPassword for the username
    const params = [username];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    if (!user) throw new ClientError(401, 'invalid login'); // if no user found, throw Error
    const { userId, hashedPassword } = user; // found user
    const verified = await argon2.verify(hashedPassword, password); // confirming the password included in request body (the one user provided) matched with hashedPassword
    if (!verified) throw new ClientError(401, 'invalid login'); // if password doesnt match, throw error
    const payload = { userId, username }; // create payload object with userId and username
    const token = jwt.sign(payload, hashKey); // creating a new signed token using payload and your TOKEN_SECRET
    res.send({ token, user: payload }); // send back to front end, token and user property with payload object, this a 200 ?
  } catch (err) {
    next(err);
  }
});

app.get('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select *
        from "todos"
        where "userId" = $1
        order by "todoId"
    `;
    const result = await db.query<Todo>(sql, [req.user?.userId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    const { task, isCompleted = false } = req.body;
    if (!task || typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'task and isCompleted are required');
    }
    const sql = `
      insert into "todos" ("userId", "task", "isCompleted")
        values ($1, $2, $3)
        returning *
    `;
    const params = [req.user?.userId, task, isCompleted];
    const result = await db.query<Todo>(sql, params);
    const [todo] = result.rows;
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

app.put('/api/todos/:todoId', authMiddleware, async (req, res, next) => {
  try {
    const todoId = Number(req.params.todoId);
    if (!Number.isInteger(todoId) || todoId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const { task, isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'isCompleted (boolean) is required');
    }
    const sql = `
      update "todos"
        set "updatedAt" = now(),
            "isCompleted" = $1,
            "task" = $2
        where "todoId" = $3 and "userId" = $4
        returning *
    `;
    const params = [isCompleted, task, todoId, req.user?.userId];
    const result = await db.query<Todo>(sql, params);
    const [todo] = result.rows;
    if (!todo) {
      throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
