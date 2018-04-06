import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../middleware/Auth';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const signUp = async (req, res) => {
  // Sign Up
  const { email, password } = req.body;
  // const ret = { user: { id: 0, email, password } };
  // firebase create user
  const auth = new Auth();
  const signedIn = await auth.signUp(email, password).catch(error => {
    console.error(error);
  });

  // todo: Save user to database

  res.status(200).send(signedIn);
};

const getUsers = (req, res) => {
  res.status(200).send({
    users: [
      {
        id: 0,
        email: 'paul@hgmail.com',
        password: '1234'
      },
      {
        id: 2,
        email: 'berna@hgmail.com',
        password: '5678'
      },
      {
        id: 3,
        email: 'rosa@hgmail.com',
        password: '4321'
      },
      {
        id: 4,
        email: 'ali@hgmail.com',
        password: '8765'
      }
    ]
  });
};

router
  .route('/')
  .post(signUp)
  .get(getUsers);

export default router;
