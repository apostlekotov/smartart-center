import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRandomArticles } from '../../actions/article';
import Slider from 'react-slick';

const EventsSlider = ({ getRandomArticles, randomArticles, loading }) => {
  useEffect(() => {
    getRandomArticles();
  }, [getRandomArticles]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {loading ? (
          <Spinner />
        ) : (
          randomArticles.map(article => (
            <div key={article._id}>
              <Link to={`/event/${article.route}`}>
                <div className='post-img sq-img'>
                  <div>
                    <span>{article.title}</span>
                    <p>{article.subtitle}</p>
                  </div>
                  <img
                    src={`img/articles/${article.img}`}
                    alt={article.title}
                  />
                </div>
              </Link>
            </div>
          ))
        )}
      </Slider>
    </Fragment>
  );
};

EventsSlider.propTypes = {
  getRandomArticles: PropTypes.func.isRequired,
  randomArticles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  randomArticles: state.article.randomArticles,
  loading: state.article.loading
});

export default connect(
  mapStateToProps,
  { getRandomArticles }
)(EventsSlider);
