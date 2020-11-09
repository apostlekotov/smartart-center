import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='main'>
      <div className='intro'>
        <h1>404 Ой лихо...</h1>
        <p>Мабуть цієї сторінки не існує</p>
        <Link to='/' className='rounded-btn orange-btn'>
          Повернутися
        </Link>
      </div>
      <div className='intro-img'>
        <img src='img/404.jpg' alt='SmartArt' />
      </div>
    </section>
  );
};

export default NotFound;
