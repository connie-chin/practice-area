/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const token = req.get('authorization')?.split('Bearer ')[1]; // get the 'Authorization' header from the request, parse token from header with split portion..verify the info matches the token?!
  if (!token) throw new ClientError(401, 'authentication required'); // if no header or token provided, throw error
  req.user = jwt.verify(token, hashKey) as Request['user']; // verify authenticity of token and extract its payload... we attach it to user property of request object. so this info is available in the endpoint
  next(); // call next to let Express know to go to next route or middleware
}
