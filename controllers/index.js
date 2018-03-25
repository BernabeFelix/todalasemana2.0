import express from 'express';
import AuthController from './AuthController';

//Export all controllers here
const app = express();

app.use('/auth', AuthController);

export default app;
