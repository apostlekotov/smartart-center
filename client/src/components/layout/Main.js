import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ServicesSlider from '../sliders/ServicesSlider';
import Contacts from './Contacts';

const Main = () => (
  <Fragment>
    <Helmet>
      <title>SmartArt - Центр розвитку дитини</title>
      <meta
        name='description'
        content='Центр розвитку дитини Smart Art – територія, де досвідчені педагоги
            розкривають таланти та плекають зернини творчості та
            індивідуальності кожної дитини.'
      />
    </Helmet>

    <section className='main'>
      <div className='intro'>
        <h1>Smart Art</h1>
        <h2>Центр розвитку дитини</h2>
        <p>
          Створюємо атмосферу довіри, взаєморозуміння, творчості!
          <br />
          Ми робимо дитинство яскравим!
        </p>
        <Link to='/about' className='rounded-btn orange-btn'>
          Детальніше про нас
        </Link>
      </div>
      <div className='intro-img'>
        <svg height='72' width='72'>
          <circle cx='36' cy='36' r='36' fill='#faa635' />
        </svg>
        <svg height='120' width='120'>
          <circle cx='60' cy='60' r='60' fill='#fff' />
        </svg>
        <svg height='170' width='170'>
          <circle cx='85' cy='85' r='85' fill='#faa635' />
        </svg>
        <svg height='130' width='130'>
          <circle cx='65' cy='65' r='65' fill='#fff' />
        </svg>
        <svg height='400' width='400'>
          <circle cx='200' cy='200' r='200' fill='#fff' />
        </svg>
        <svg height='200' width='200'>
          <circle cx='100' cy='100' r='100' fill='#faa635' />
        </svg>
        <img src='img/main.jpg' alt='SmartArt' />
      </div>
      <div className='scrolldown'>
        <img src='img/scrolldown.gif' alt='scrolldown' />
      </div>
    </section>

    <section className='services-preview'>
      <div className='section-header'>
        <h3>Ми пропонуємо</h3>
        <div className='stripe'></div>
      </div>
      <div id='services-slider'>
        <ServicesSlider />
      </div>
    </section>

    <section className='educators-preview'>
      <div className='section-header'>
        <h3>Наші педагоги</h3>
        <div className='stripe'></div>
      </div>
      <div className='educators-cards'>
        <div className='ed-card'>
          <img
            src='img/educators/educator_li.jpg'
            alt='Лариса Іванівна Студія Творчості'
          />
          <span>Лариса Іванівна</span>
          <span>Студія Творчості</span>
        </div>
        <div className='ed-card'>
          <img
            src='img/educators/educator_sg.jpg'
            alt='Світлана Григорівна Вокал'
          />
          <span>Світлана Григорівна</span>
          <span>Вокал</span>
        </div>
        <div className='ed-card'>
          <img
            src='img/educators/educator_ym.jpg'
            alt='Юлія Михайлівна Чарівна Няня'
          />
          <span>Юлія Михайлівна</span>
          <span>Чарівна Няня</span>
        </div>
        <div>
          <div className='ed-card'>
            <img
              src='img/educators/educator_om.jpg'
              alt='Олена Миколаївна Психолог'
            />
            <span>Олена Миколаївна</span>
            <span>Психолог</span>
          </div>
          <div className='ed-card'>
            <img
              src='img/educators/educator_ne.jpg'
              alt='Наталія Євгеніївна Логопед'
            />
            <span>Наталія Євгеніївна</span>
            <span>Логопед</span>
          </div>
        </div>
      </div>
    </section>

    <Contacts />
  </Fragment>
);

export default Main;
