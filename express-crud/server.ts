import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from "grades";
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.sendStatus(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    select * from "grades"
    where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.sendStatus(200).json(grade);
  } catch (err) {
    next(err); // this the 500
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    validateGrade(req.body); // instead of checking each value
    const { name, course, score } = req.body;
    const sql = `
    insert into "grades"("name", "course", "score")
                values ($1, $2, $3)
                returning *;
                `;
    const params = [name, course, score];
    const result = await db.query<Grade>(sql, params);
    const newGrade = result.rows[0];
    res.sendStatus(201).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    validateGrade(req.body);
    const { name, course, score } = req.body;
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId"=$4
    returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query<Grade>(sql, params);
    const updatedGrade = result.rows[0]; // getting first object in array
    if (!updatedGrade) {
      throw new ClientError(404, `Actor with id ${gradeId} not found`);
    }
    res.sendStatus(200).json(updatedGrade); // if it exists we send back to client
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  // similar to update/put
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    delete from "grades"
    where "gradeId"=$1
    returning*;
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) throw new ClientError(404, `grade ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err); // this the 500
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function validateGradeId(gradeId: string): void {
  const id = +gradeId;
  if (!Number.isInteger(id))
    throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
}

function validateGrade(grade: unknown): void {
  const { name, course, score } = grade as Grade;
  if (!name) {
    throw new ClientError(400, 'No name provided');
  }
  if (!course) {
    throw new ClientError(400, 'No course provided');
  }
  if (typeof score !== 'number') {
    throw new ClientError(400, `score is not a number: ${score}`);
  }
  if (score < 0 || score > 100) {
    throw new ClientError(400, `score ${score} is not between 0 and 100`);
  }
}
