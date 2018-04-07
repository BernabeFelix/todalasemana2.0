import express from 'express';
import promos from './promos';
import clients from './clients';

const routes = express.Router();

routes.use('/promos', promos);
routes.use('/clients', clients);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Online' });
});

export default routes;
