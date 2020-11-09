const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { slugify } = require('transliteration');
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './client/public/img/articles');
  },
  filename: function(req, file, cb) {
    cb(null, slugify(file.originalname));
  }
});
const upload = multer({ storage });

const auth = require('../../middleware/auth');
const Article = require('../../models/Article');

// @route   POST api/articles
// @desc    Create an article
// access   Private
router.post(
  '/',
  [
    auth,
    upload.single('img'),
    check('title', 'Введіть назву статті')
      .not()
      .isEmpty(),
    check('subtitle', 'Введіть підзаголовок статті')
      .not()
      .isEmpty(),
    check('text', 'Напишіть статтю')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ errors: [{ msg: 'Додайте фото' }] });
    }

    const { originalname } = req.file;

    const { title, subtitle, text, author = null } = req.body;

    const route = slugify(title);
    const img = slugify(originalname);

    var formattingText = text
      .replace(/#~/gm, '</p><h3>')
      .replace(/~#/gm, '</h3><p>')
      .replace(/%~/gm, '<a href=')
      .replace(/~>/gm, ' target="_blank">')
      .replace(/~%/gm, '</a>')
      .replace(/~~/gm, '<br/>');

    try {
      let article = await Article.findOne({ route });

      if (article) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Стаття з таким заголовком існує' }] });
      }

      article = new Article({
        title,
        route,
        subtitle,
        img,
        text: formattingText,
        author
      });

      await article.save();

      res.json(article);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Помилка сервера');
    }
  }
);

// @route    GET api/articles
// @desc     Get all articles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    GET api/articles/all-preview
// @desc     Get all articles preview
// @access   Public
router.get('/all-preview', async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ date: -1 })
      .select('-text')
      .select('-author');
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    GET api/articles/preview
// @desc     Get preview articles preview
// @access   Public
router.get('/preview', async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ date: -1 })
      .select('-text')
      .select('-author')
      .limit(5);
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    GET api/articles/latest
// @desc     Get latest article
// @access   Public
router.get('/latest', async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ date: -1 })
      .limit(1)
      .select('-text')
      .select('-author');
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    GET api/articles/random
// @desc     Get random articles
// @access   Public
router.get('/random', async (req, res) => {
  try {
    const count = (await Article.estimatedDocumentCount()) - 1;
    const articles = await Article.find()
      .select('-text')
      .select('-author');

    const random = () => {
      let m = {};
      let arr = [];
      for (let i = 0; i < 5; ++i) {
        let rand = Math.floor(Math.random() * (count - i));
        arr.push((rand in m ? m[rand] : rand) + 1);
        let l = count - i - 1;
        m[rand] = l in m ? m[l] : l;
      }
      return arr;
    };

    const arrayFilter = (array, filter) => {
      let result = [];
      let i = 0;
      while (i < 5) {
        result.push(array[filter[i]]);
        i++;
      }
      return result;
    };

    res.json(arrayFilter(articles, random()));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Помилка сервера');
  }
});

// @route    GET api/articles/:route
// @desc     Get article by route
// @access   Public
router.get('/:route', async (req, res) => {
  try {
    const article = await Article.find({ route: req.params.route });

    if (!article) {
      return res.status(404).json({ msg: 'Статтю не знайдено' });
    }

    res.json(article[0]);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Статтю не знайдено' });
    }
    res.status(500).send('Помилка сервера');
  }
});

// @route    DELETE api/articles/:id
// @desc     Delete a article
// @access   Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ msg: 'Статтю не знайдено' });
    }

    fs.unlink(`./client/public/img/articles/${article.img}`, err => {
      if (err) throw err;
      console.log(`${article.img} was deleted`);
    });

    await article.remove();

    res.json({ msg: 'Статтю видалено' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Статтю не знайдено' });
    }
    res.status(500).send('Помилка сервера');
  }
});

module.exports = router;
