import express from 'express';
import promos from './promotions';
import all from './all';
import single from './single';

// TODO: source should be graphQL

const routes = express.Router();

// I don't like this approach.
// I think it should be validated in the single function itself.
// That way we call database only once...
routes.param('promoId', (req, res, next, value) => {
  try {
    const promoId = parseInt(value, 10);
    const promo = promos.find(m => m.id === promoId);

    if (promo) {
      req.promo = promo;
      next();
    } else {
      const err = { code: 'promos/not-found', message: 'Invalid promotion ID' };
      throw err;
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

routes.use('/:promoId', single);
routes.route('/').get(all); // TODO: add post handler

export default routes;
