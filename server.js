import express from 'express';
import AuthController from './controllers/AuthController';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/auth', AuthController);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
