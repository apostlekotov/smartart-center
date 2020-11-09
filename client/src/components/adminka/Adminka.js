import React from 'react';
import { Link } from 'react-router-dom';

const Adminka = props => {
  return (
    <section className='main-section'>
      <div className='section-header'>
        <h1 className='hidden'>SmartArt</h1>
        <h2>Адмінка</h2>
        <div className='stripe'></div>
      </div>
      <div className='admin-btn'>
        <div>
          <Link to='/mailbox' className='rounded-btn orange-btn'>
            <i className='fa fa-inbox'></i> Переглянути пошту
          </Link>
        </div>
        <div>
          <Link to='/create-article' className='rounded-btn orange-btn'>
            <i className='fas fa-plus'></i> Створити статтю
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Adminka;
