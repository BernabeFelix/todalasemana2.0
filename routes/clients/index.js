import express from 'express';
import clients from './clients';
import all from './all';
import single from './single';
import save from './save';

// TODO: get rid of get all... now using graphQL

const routes = express.Router();

routes.param('clientId', (req, res, next, value) => {
  try {
    const clientId = parseInt(value, 10);
    const client = clients.find(m => m.id === clientId);

    if (client) {
      req.client = client;
      next();
    } else {
      const err = { code: 'clients/not-found', message: 'Invalid client ID' };
      throw err;
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

routes.use('/:clientId', single);
routes
  .route('/')
  .get(all)
  .post(save);

export default routes;
