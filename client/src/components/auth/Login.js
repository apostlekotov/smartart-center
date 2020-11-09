import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/adminka' />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>SmartArt - Вхід</title>
      </Helmet>

      <section className='login main-section'>
        <div className='section-header'>
          <h1 className='hidden'>SmartArt</h1>
          <h2>Вхід</h2>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
