import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: number;
  iat: number;
  exp: number;
}
export default function storeAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Store login is required' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.JWT_STORE_SECRET as string);

    const { id } = data as ITokenPayload;

    req.storeId = id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Store login is required' });
  }
}
