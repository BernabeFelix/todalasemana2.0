import express from 'express';
import AuthController from './controllers/AuthController';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/auth', AuthController);

export default app;
