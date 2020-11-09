import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import RandomArticle from '../events/RandomArticle';

const Services = () => (
  <Fragment>
    <Helmet>
      <title>SmartArt - Программи та куриси</title>
      <meta
        name='description'
        content='Центр розвитку дитини Smart Art – територія, де досвідчені педагоги
          розкривають таланти та плекають зернини творчості та
          індивідуальності кожної дитини.'
      />
    </Helmet>

    <section className='services main-section'>
      <div className='section-header'>
        <h1 className='hidden'>SmartArt</h1>
        <h2>Наші послуги</h2>
        <div className='stripe'></div>
      </div>

      <div className='service-block'>
        <span>Міні-сад (з 2 років)</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Це місце, де у любові, грі, музиці та інших цікавих заняттях Ваші
              діти проведуть час, поки Вас немає поруч, дізнаються, що таке
              дружба та отримають життєво необхідні вміння і навички, відчують
              себе маленькими дослідниками
            </b>
            <br />
            <i>
              <ul>
                На Ваших малюків чекає:
                <li>- Ранкова гімнастика;</li>
                <li>- Світ навколо тебе та уроки обережності;</li>
                <li>- Казкотерапія;</li>
                <li>- Рухливі, сюжетно-рольові та дидактичні ігри ;</li>
                <li>
                  - Розвиваючі заняття (розвиток мовлення, математика, логіка,
                  навчання читанню, елементи грамоти, підготовка до письма);
                </li>
                <li>- Соціальна адаптація;</li>
                <li>- Доброзичлива атмосфера та уважне ставлення.</li>
              </ul>
            </i>
            <b>Розклад роботи:</b>
            <i> з понеділка по пятницю з 9:00 до 13:00; 15:00 до 19:00.</i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-72.jpg' alt='Міні-сад'></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Підготовка до школи</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Види занять: «За два кроки до школи» (з 4 років) «За крок до
              школи» (з 5 років) Інтелектуальна готовність дитини є пріоритетною
              для успішного навчання в школі, успішної взаємодії з однолітками і
              навколишнім світом.
            </b>
            <br />
            <i>
              <ul>
                Курс занять передбачає:
                <li>- формування логіко-математичних навичок;</li>
                <li>- підготовку руки до письма;</li>
                <li>- основи читання;</li>
                <li>- розвиток мовлення;</li>
                <li>- навчання елементів грамоти;</li>
                <li>- формування знань про навколишній світ;</li>
                <li>- логіка</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>
              понеділок, вівторок, середа, четвер з 09:00 до 10:00 вівторок,
              четвер з 16:00 до 17:00
            </i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/pidg_school.jpg'
              alt='Підготовка до школи'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Психологічна готовність до школи</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Психологічна готовність до школи передбачає такий рівень
              психічного розвитку дитини, який створює умови для успішного
              опанування навчальної діяльності, позитивного ставлення до вступу
              в школу, сформованості «внутрішньої позиції школяра»
            </b>
            <br />
            <i>
              <ul>
                Курс занять передбачає:
                <li>- формування позитивної навчальної шкільної мотивації;</li>
                <li>
                  - розвиток психічних процесів (мислення, пам’яті, сприйняття,
                  уваги, уяви);
                </li>
                <li>- розвиток дрібної моторики;</li>
                <li>- сприяння розвитку самостійності дітей;</li>
                <li>- формування довільної поведінки;</li>
                <li>
                  - розвиток навиків спілкування і взаємодії з однолітками та
                  дорослими
                </li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>щоп’ятниці з 09:00 до 10:00, з 16:00 до 17:00</i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/Smart-102.jpg'
              alt='Психологічна готовність до школи'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Розвиток логіки та інтелекту</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Курс сприятиме розвитку розумових здібностей, покращуючи моторні
              та навчальні навички, підвищуючи впевненість у своїх силах (з 4
              років)
            </b>
            <br />
            <i>
              <ul>
                Курс занять передбачає:
                <li>
                  - розвиток візуально-просторових навичок – впізнавання форм,
                  образів, схем, візерунків, кольорів;
                </li>
                <li>- аналіз, узагальнення та порівняння предметів;</li>
                <li>- формування елементарних математичних навичок;</li>
                <li>- гармонійний розвиток лівої і правої півкуль;</li>
                <li>
                  - розвиток кінестетичних навичок, які вимагають контролю над
                  рухами тіла, включаючи рівновагу та динаміку;
                </li>
                <li>- розвиток зв’язного мовлення</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>щоп’ятниці з 10:00 до 11:00, з 17:00 до 18:00</i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/Smart-110.jpg'
              alt='Розвиток логіки та інтелекту'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Ранній розвиток</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              «Я і мама» (з 2 років) Курс «Я і мама» - це система розвиваючих
              занять та вправ, які впливають на основні пізнавальні процеси
              дитини – відчуття, сприйняття, мислення, уяву, пам’ять і увагу
            </b>
            <br />
            <i>
              <ul>
                Відвідуючи заняття діти вчаться:
                <li>- розрізняти та називати основні кольори;</li>
                <li>- складати ціле з частин;</li>
                <li>- знаходити однакові малюнки;</li>
                <li>- підбирати візерунок;</li>
                <li>- тренувати увагу (складати формові дошки);</li>
                <li>- розрізняти поняття «багато-мало»;</li>
                <li>- викладати елементи за розміром та висотою</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>
              вівторок, четвер з 11:00 до 12:00, понеділок, середа з 16:00 до
              17:00
            </i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-66.jpg' alt='«Я і мама»'></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Ранній розвиток</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              «Я самостійний» (з 3 років) Курс «Я самостійний» - це комплекс
              розвиваючих занять, які включають завдання різної тематики, метою
              яких є розвиток різних видів психічних процесів дитини і отримання
              нових знань.
            </b>
            <br />
            <i>
              <ul>
                Відвідуючи заняття діти вчаться:
                <li>
                  - порівнювати і групувати предмети за певними ознаками:
                  кольором, формою, частинами; розрізняти подібні предмети;
                </li>
                <li>- визначати протилежності;</li>
                <li>- шукати частину від цілого;</li>
                <li>- складати пазли;</li>
                <li>- знаходити зайвий предмет;</li>
                <li>- логічно мислити;</li>
                <li>- орієнтуватися в собі та навколишньому середовищі</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>
              понеділок, середа з 11:00 до 12:00 вівторок, четвер з 16:00 до
              17:00
            </i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-45.jpg' alt='«Я самостійний»'></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Творча майстерня</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              В наших творчих майстернях ми розкриємо потенціал Вашої дитини,
              допоможемо розвинути творчі здібності, уяву та креативність.
              Завдяки технічній різноманітності, цікавим темам, різноманітності
              матеріалів і яскравості процесу цей курс підходить для будь-якої
              дитини, яка бажає експериментувати, пізнавати щось нове. (з 3
              років)
            </b>
            <br />
            <br />
            <b>На Вас чекаємо:</b>{' '}
            <i>
              понеділок, вівторок, середа з 10:00 до 11:00, з 15:00 до 16:00
            </i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-112.jpg' alt='Творча майстерня'></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Художня студія</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Живопис – це вид образотворчого мистецтва, який дуже важливий для
              повноцінного і всебічного розвитку особистості дитини. Заняття з
              малювання сприяють розкриттю творчих здібностей, креативного
              мислення і просторового уявлення дитини (з 3 років)
            </b>
            <br />
            <i>
              <ul>
                Відвідуючи заняття діти вчаться:
                <li>- змішувати фарби для утворення нових кольорів;</li>
                <li>- орієнтуватись на аркуші паперу;</li>
                <li>
                  - створювати малюнки, використовуючи різні засоби виразності
                  (колір, форму, композицію);
                </li>
                <li>- поєднувати різні техніки малювання;</li>
                <li>- розрізняти жанри живопису;</li>
                <li>- втілювати свій творчий задум</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b>{' '}
            <i>четвер з 10:00 до 11:00, понеділок, середа з 16:00 до 17:00</i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-93.jpg' alt='Художня студія'></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Індивідуальні навчання вокалу</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <i>
              <ul>
                Курс навчання вокалу включає:
                <li>- постановку голосу і дихання;</li>
                <li>- розвиток слуху, відчуття ритму, музична грамотність;</li>
                <li>- вміння працювати з мікрофоном;</li>
                <li>- вміння співати різними стилями</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b> <i>за попереднім записом.</i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/Smart-137.jpg'
              alt='Індивідуальні навчання вокалу'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Індивідуальні заняття з логопедом</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <i>
              <ul>
                Працює з такими порушеннями мовлення:
                <li>- звуковими (дислалія, дизартрія, ринолалія та інші);</li>
                <li>- загальний недорозвиток мовлення (ЗНМ);</li>
                <li>- фонетико-фонематичний недорозвиток мовлення (ФФНМ);</li>
                <li>- порушення письма та читання (дисграфія, дислаксія);</li>
                <li>- відсутність мовлення (алалія)</li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b> <i>за попереднім записом.</i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/Smart-79.jpg'
              alt='Індивідуальні заняття з логопедом'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Індивідуальні заняття з психологом</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Індивідуальні консультації для батьків Психодіагностична,
              корекційна та розвиткова робота з дітьми:
            </b>
            <br />
            <i>
              <ul>
                <li>- діагностика психологічної готовності до школи;</li>
                <li>- діагностика рівня психічних процесів;</li>
                <li>- гіперактивність дитини</li>
                <li>
                  <ul>
                    - виявлення та корекція:
                    <li>
                      • проблем в поведінці дитини (агресивність, конфліктність,
                      схильність до брехні);
                    </li>
                    <li>
                      • емоційних проблем дитини (невпевненість у собі,
                      сором’язливість, тривожність, занижена самооцінка);
                    </li>
                  </ul>
                </li>
              </ul>
            </i>
            <b>На Вас чекаємо:</b> <i>за попереднім записом.</i>
          </div>
          <div className='service-body-img'>
            <img
              src='img/services/Smart-69.jpg'
              alt='Індивідуальні заняття з психологом'
            ></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Няня на годину</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Наша послуга «Няня на годину» дасть Вам можливість вільного часу
              для власних справ, а дитина порине у чарівний світ казки та гри
            </b>
            <br />
            <br />
            <b>На Вас чекаємо:</b> <i>щоденно з 09:00 до 20:00</i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-121.jpg' alt='Няня на годину'></img>
          </div>
        </div>
      </div>

      <div className='service-block'>
        <span>Ритміка</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Заняття з ритміки сприяють фізичному, естетичному, моральному,
              психологічному розвитку дітей. Допомагають дитині через рухи та
              музику передавати свої емоційні стани, розслаблювати власне тіло;
              розвивають слухове сприймання, уяву, пам’ять, увагу, творчі
              здібності, активізують розумові здібності. (з 3 років)
            </b>
            <br />
            <br />
            <b>На Вас чекаємо</b> <i>вівторок, четвер з 17:00 до 18:00</i>
          </div>
          <div className='service-body-img'>
            <img src='img/services/Smart-67.jpg' alt='Ритміка'></img>
          </div>
        </div>
      </div>

      <div className='service-block body-reversed'>
        <span>Оренда</span>
        <div className='service-body'>
          <div className='service-body-inner'>
            <b>
              Чудовий варіант для проведення презентацій, лекцій, тренінгів,
              святкування Днів народжень. Зала облаштована екраном, проектором,
              фліпчартом, стільцями, вміщує до 50 сидячих місць.
            </b>
          </div>
          <div className='service-body-img'>
            <img src='img/services/arenda.jpg' alt='Оренда'></img>
          </div>
        </div>
      </div>
    </section>

    <RandomArticle />

    <section className='prices'>
      <div>
        <div className='column'>
          <div className='price-card'>
            <span className='title'>Ранній розвиток</span>
            <i>«Я і мама»</i>
            <div className='stripe'></div>
            <span className='price'>1200 грн</span>
            <i>(8 занять)</i>
            <span className='price'>180 грн</span>
            <i>(пробне заняття)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Розвиток логіки та інтелекту</span>
            <div className='stripe'></div>
            <span className='price'>800 грн</span>
            <i>(4 занять)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Індивідуальне заняття з психологом</span>
            <div className='stripe'></div>
            <span className='price'>250 грн</span>
            <i>(одне заняття)</i>
          </div>
        </div>
        <div className='column'>
          <div className='price-card'>
            <span className='title'>Підготовка до школи</span>
            <div className='stripe'></div>
            <span className='price'>1000 грн</span>
            <i>(8 занять)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Художня студія</span>
            <i>(5-6р)(3-4р)</i>
            <div className='stripe'></div>
            <span className='price'>1000 грн</span>
            <i>(8 занять)</i>
            <span className='price'>700 грн</span>
            <i>(4 занять)</i>
            <span className='price'>180 грн</span>
            <i>(пробне заняття)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Індивідуальна консультація психолога</span>
            <div className='stripe'></div>
            <span className='price'>200 грн</span>
          </div>
        </div>
      </div>

      <div>
        <div className='column'>
          <div className='price-card'>
            <span className='title'>Ранній розвиток</span>
            <i>«Я самостійний»</i>
            <div className='stripe'></div>
            <span className='price'>1200 грн</span>
            <i>(8 занять)</i>
            <span className='price'>180 грн</span>
            <i>(пробне заняття)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Творча майстерня</span>
            <i>«Паперові фантазії»</i>
            <div className='stripe'></div>
            <span className='price'>180 грн</span>
            <i>(одне заняття)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Індивідуальне заняття з логопедом</span>
            <div className='stripe'></div>
            <span className='price'>300 грн</span>
            <i>(одне заняття)</i>
          </div>
        </div>
        <div className='column'>
          <div className='price-card'>
            <span className='title'>Психологічна готовність до школи</span>
            <div className='stripe'></div>
            <span className='price'>600 грн</span>
            <i>(4 занять)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Вокал | Ритміка</span>
            <div className='stripe'></div>
            <span className='price'>200 грн</span>
            <i>(одне заняття)</i>
          </div>
          <div className='price-card'>
            <span className='title'>Індивідуальна консультація логопеда</span>
            <div className='stripe'></div>
            <span className='price'>200 грн</span>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Services;
