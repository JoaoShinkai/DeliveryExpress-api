import '@shared/container';
import cors from 'cors';
import express from 'express';
import '../typeorm';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
