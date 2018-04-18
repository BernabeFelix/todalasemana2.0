import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

// @paul are these needed?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
app.use('/public', express.static('public', { root: __dirname }));

// Default HTML
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
