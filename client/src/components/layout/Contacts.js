import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendLetter } from '../../actions/mailbox';

const Contacts = ({ sendLetter }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    sendLetter(name, email, message);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Fragment>
      <iframe
        className='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.937518993717!2d30.46415631572909!3d50.38636327946656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8dca896ba1f%3A0x7c056c97545b305e!2z0YPQuy4g0JzQuNGF0LDQuNC70LAg0JvQvtC80L7QvdC-0YHQvtCy0LAsIDQ4LCDQmtC40LXQsiwgMDMxODk!5e0!3m2!1sru!2sua!4v1564752200976!5m2!1sru!2sua'
        width='100%'
        height='320'
        frameBorder='0'
        allowFullScreen
        title='Google Map'
      ></iframe>

      <section className='contacts'>
        <div className='contact-info'>
          <a
            href='https://goo.gl/maps/c7qtgP2bhfGatg1QA'
            target='_blank'
            rel='noopener noreferrer'
          >
            вулиця Михайла Ломоносова, 48, Київ
          </a>
          <a
            href='https://www.facebook.com/smartartteremki'
            target='_blank'
            rel='noopener noreferrer'
          >
            facebook.com/smartartteremki
          </a>
          <a href='mailto:smartarttabir@gmail.com'>smartarttabir@gmail.com</a>
          <a href='tel:+380974424420'>(097)-442-44-20</a>
        </div>
        <div className='section-header' id='contacts'>
          <h3>Напишіть нам</h3>
          <div className='stripe'></div>
        </div>

        <div className='contact-form'>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <input
                name='name'
                autoComplete='off'
                type='text'
                size='40'
                value={name}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='name'>Ім'я</label>
            </div>
            <div>
              <input
                name='email'
                autoComplete='off'
                type='text'
                size='40'
                value={email}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='email'>eMail</label>
            </div>
            <div>
              <textarea
                name='message'
                value={message}
                onChange={e => onChange(e)}
                required
              ></textarea>
              <label htmlFor='message'>Повідомлення</label>
            </div>
            <input
              type='submit'
              className='rounded-btn orange-btn'
              value='Надіслати'
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

Contacts.propTypes = {
  sendLetter: PropTypes.func.isRequired
};

export default connect(
  null,
  { sendLetter }
)(Contacts);
