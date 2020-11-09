const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Letter = require('../../models/Letter');

// @route   POST api/mailbox
// @desc    Send a letter
// access   Public
router.post(
  '/',
  [
    check('name', 'Введіть ім`я')
      .not()
      .isEmpty(),
    check('email', 'Недійсна пошта').isEmail(),
    check('message', 'Недійсний лист')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      const letter = new Letter({
        name,
        email,
        message
      });

      await letter.save();

      res.json(letter);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Помилка сервера');
    }
  }
);

// @route   GET api/mailbox
// @desc    Get all letters
// access   Private
router.get('/', auth, async (req, res) => {
  try {
    const letters = await Letter.find().sort({ date: -1 });
    res.json(letters);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    DELETE api/mailbox/:id
// @desc     Delete a letter
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({ msg: 'Лист не знайдено' });
    }

    await letter.remove();

    res.json({ msg: 'Лист видаленний' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Лист не знайдено' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
