import express from 'express';
import controllers from './controllers';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', controllers);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
