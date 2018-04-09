import express from 'express';
import cors from 'cors';
import routes from './routes';
import graphqlApp from './graphql';

const app = express();
const port = process.env.PORT || 5000;

// This is needed for apollo in the frontend
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// API

app.use('/api', routes);

app.use('/public', express.static('public', { root: __dirname }));

app.use('/graphql', graphqlApp);

// Default HTML
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
