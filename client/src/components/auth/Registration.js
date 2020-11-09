import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registration } from '../../actions/auth';

const Registration = ({ registration }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    secret: ''
  });

  const { username, password, secret } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    registration(username, password, secret);
  };

  return (
    <Fragment>
      <Helmet>
        <title>SmartArt - Реєстрація</title>
      </Helmet>

      <section className='login main-section'>
        <div className='section-header'>
          <h1 className='hidden'>SmartArt</h1>
          <h2>Реєстрація</h2>
          <div className='stripe'></div>
        </div>

        <div className='contact-form'>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <input
                name='username'
                autoComplete='off'
                type='text'
                size='40'
                value={username}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='username'>Логін</label>
            </div>
            <div>
              <input
                name='password'
                autoComplete='off'
                type='password'
                size='40'
                value={password}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='password'>Пароль</label>
            </div>
            <div>
              <input
                name='secret'
                autoComplete='off'
                type='password'
                size='40'
                value={secret}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='secret'>Секрет</label>
            </div>
            <input
              type='submit'
              className='rounded-btn orange-btn'
              value='Перейти на темну сторону'
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

Registration.propTypes = {
  registration: PropTypes.func.isRequired
};

export default connect(
  null,
  { registration }
)(Registration);
