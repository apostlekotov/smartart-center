import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createArticle } from '../../actions/article';

const CreateArticle = ({ createArticle }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    text: '',
    img: {},
    author: ''
  });

  const { title, subtitle, text, img, author } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    createArticle(title, subtitle, text, img, author);
    setFormData({
      title: '',
      subtitle: '',
      text: '',
      img: {},
      author: ''
    });
  };

  return (
    <section className='main-section create-article'>
      <div className='section-header'>
        <h1 className='hidden'>SmartArt</h1>
        <h2>Створити статтю</h2>
        <div className='stripe'></div>
      </div>

      <p className='desc'>
        Ставте певні символи в тексті для форматування: <br />
        <b>#~</b> Заголовка <b>~#</b>
        <br />
        <b>%~"</b>https://google.com<b>"~></b> Послилання на сайт <b>~%</b>
        <br />
        <b>~~</b> Перенесення рядка
        <br />
        <b>~~~~</b> Перенесення рядка з відступом
      </p>

      <div className='create-form'>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <input
              name='title'
              autoComplete='off'
              type='text'
              size='100'
              value={title}
              onChange={e => onChange(e)}
              required
            />
            <label htmlFor='title'>Заголовок</label>
          </div>
          <div>
            <input
              name='subtitle'
              autoComplete='off'
              type='text'
              size='500'
              value={subtitle}
              onChange={e => onChange(e)}
              required
            />
            <label htmlFor='subtitle'>Підзаголовок</label>
          </div>
          <div>
            <input
              name='img'
              type='file'
              accept='image/*'
              onChange={e => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.files[0]
                });
              }}
              required
            />
            <label htmlFor='img'>
              <i className='fas fa-upload'></i>{' '}
              {!img.name ? 'Завантажте фото' : img.name}
            </label>
          </div>
          <div>
            <textarea
              name='text'
              value={text}
              onChange={e => onChange(e)}
              required
            ></textarea>
            <label htmlFor='text'>Текст</label>
          </div>
          <div>
            <input
              name='author'
              autoComplete='off'
              type='text'
              size='40'
              value={author}
              onChange={e => onChange(e)}
              required
            />
            <label htmlFor='author'>Автор</label>
          </div>
          <input
            type='submit'
            className='rounded-btn orange-btn'
            value='Створити статтю'
          />
        </form>
      </div>
    </section>
  );
};

CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired
};

export default connect(
  null,
  { createArticle }
)(CreateArticle);
