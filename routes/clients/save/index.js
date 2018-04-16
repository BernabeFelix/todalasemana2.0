import express from 'express';
import { validations, validate } from './validations';

const router = express.Router();

const save = (req, res) => {
  const emailVerified = false;
  const joined = Date.now();
  const client = {
    emailVerified, // Will we need it at some point?
    joined,
    ...req.body
  };

  // Save new client to database
  console.log(client);

  res.status(200).send({ status: 'ok', message: 'Usuario guardado.' });
};

router.post('/', validations, validate, save);

export default router;
