const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signin')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await User.findOne({
          where: {
            email
          },
        });
        if (user && await bycrypt.compare(password, user.password)) {
        req.session.user = { id: user.id, name: user.name };
        return res.json({ id: user.id, name: user.name });
        }
        else {
          res.json({})
        }
      } catch (err) {
        console.log(err);
        return res.sendStatus(401);
      }
    }
  });

router.route('/signup')
  .post(async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (name && email && password) {
      const pass = await bycrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: pass });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.json({ name: newUser.name, id: newUser.id });
    }
    return res.sendStatus(401);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

module.exports = router;
