import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());

// API
app.use('/api', routes);

app.use('/public', express.static('public', { root: __dirname }));

// Default HTML
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
