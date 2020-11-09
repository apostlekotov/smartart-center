import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EventsSlider from '../sliders/EventsSlider';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getArticlesPreview } from '../../actions/article';

const Events = ({ getArticlesPreview, articles, loading }) => {
  useEffect(() => {
    getArticlesPreview();
  }, [getArticlesPreview]);

  return (
    <Fragment>
      <Helmet>
        <title>SmartArt - Події</title>
      </Helmet>

      <section className='events main-section'>
        <div className='section-header'>
          <div>
            <h2>Події</h2>
            <Link to='/all-events'>
              <span>Всі статті</span>
            </Link>
          </div>
          <div className='stripe'></div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className='events-preview'>
            <div className='lg-post-link'>
              <Link to={`/event/${articles[0].route}`}>
                <div className='post-img sq-img'>
                  <div>
                    <span>{articles[0].title}</span>
                    <p>{articles[0].subtitle}</p>
                  </div>
                  <img
                    src={`img/articles/${articles[0].img}`}
                    alt={articles[0].title}
                  />
                </div>
              </Link>
            </div>

            <div>
              <div className='sm-post-link'>
                <Link to={`/event/${articles[1].route}`}>
                  <div className='post-img small-img'>
                    <img
                      src={`img/articles/${articles[1].img}`}
                      alt={articles[1].title}
                    />
                  </div>
                  <span>{articles[1].title}</span>
                </Link>
              </div>

              <div className='sm-post-link'>
                <Link to={`/event/${articles[3].route}`}>
                  <div className='post-img small-img'>
                    <img
                      src={`img/articles/${articles[3].img}`}
                      alt={articles[3].title}
                    />
                  </div>
                  <span>{articles[3].title}</span>
                </Link>
              </div>
            </div>
            <div>
              <div className='sm-post-link'>
                <Link to={`/event/${articles[2].route}`}>
                  <div className='post-img small-img'>
                    <img
                      src={`img/articles/${articles[2].img}`}
                      alt={articles[2].title}
                    />
                  </div>
                  <span>{articles[2].title}</span>
                </Link>
              </div>

              <div className='sm-post-link'>
                <Link to={`/event/${articles[4].route}`}>
                  <div className='post-img small-img'>
                    <img
                      src={`img/articles/${articles[4].img}`}
                      alt={articles[4].title}
                    />
                  </div>
                  <span>{articles[4].title}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className='events-slider'>
        <div id='events-slider'>
          <EventsSlider />
        </div>
      </section>
    </Fragment>
  );
};

Events.propTypes = {
  getArticlesPreview: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  articles: state.article.articles,
  loading: state.article.loading
});

export default connect(
  mapStateToProps,
  { getArticlesPreview }
)(Events);
