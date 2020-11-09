import React, { Fragment } from 'react';
import Slider from 'react-slick';

const ServicesSlider = () => {
  const settings = {
    arrows: false
  };

  return (
    <Fragment>
      <Slider {...settings}>
        <div className='slider-item'>
          <h4>Група денного перебування</h4>
          <img
            src='img/services/group_dennogo_pereb.jpg'
            alt='Група денного перебування'
          />
          <p>
            Це місце, де у любові, грі, музиці та інших цікавих заняттях Ваші
            діти проведуть час, поки Вас немає поруч, дізнаються, що таке дружба
            та отримають життєво необхідні вміння і навички, відчують себе
            маленькими дослідниками
            <br />
            <br />
            <b>
              З понелідка по п’ятницю
              <br />З 9:00 до 13:00
              <br />
              6-8 дітей у групі
              <br />
              Вартість: 000 грн
            </b>
          </p>
        </div>

        <div className='slider-item'>
          <h4 className='to-break'>Няня на годину</h4>
          <h4 className='to-break'>
            Няня
            <br />
            на годину
          </h4>
          <img src='img/services/Smart-121.jpg' alt='Няня на годину' />
          <p>
            Наша послуга «Няня на годину» дасть Вам можливість вільного часу для
            власних справ, а дитина порине у чарівний світ казки та гри
            <br />
            <br />
            <b>
              З 9:00 до 18:00
              <br />
              Та за попереднім запитом у суботу
              <br />
              Вартість: 000 грн/година
            </b>
          </p>
        </div>

        <div className='slider-item'>
          <h4>Експрес-підготовка до школи</h4>
          <img
            src='img/services/pidg_school.jpg'
            alt='Експрес-підготовка до школи'
          />
          <p>
            Курс занять передбачає: формування логіко-математичних навичок,
            підготовку руки до письма, основи читання, розвиток мовлення,
            навчання елементів грамоти
            <br />
            <br />
            <b>
              Тривалість 60 хвилин
              <br />
              Три рази на тиждень
              <br />
              Вартість: 000 грн
            </b>
          </p>
        </div>
      </Slider>
    </Fragment>
  );
};

export default ServicesSlider;
