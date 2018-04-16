import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import fileUpload from 'express-fileupload';
import routes from './routes';
import graphqlApp from './graphql';

const app = express();
const port = process.env.PORT || 5000;

// This is needed for apollo in the frontend
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(fileUpload());

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
