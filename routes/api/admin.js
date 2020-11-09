const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Admin = require('../../models/Admin');

// @route   POST api/admin
// @desc    Register admin
// access   Private

router.post(
  '/',
  [
    check('username', 'Введіть логін')
      .not()
      .isEmpty(),
    check('password', 'Введіть пароль не менше 6 символів').isLength({
      min: 6
    }),
    check('secret', 'Неправильна відповідь').equals(config.get('secret'))
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let admin = await Admin.findOne({ username });

      if (admin) {
        return res.status(400).json({ errors: [{ msg: 'Вже існує' }] });
      }

      admin = new Admin({
        username,
        password
      });

      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        admin: {
          id: admin.id
        }
      };

      jwt.sign(
        payload,
        config.get('secret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Помилка сервера');
    }
  }
);

module.exports = router;
