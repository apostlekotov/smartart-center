import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRandomArticles } from '../../actions/article';

const RandomArticle = ({ getRandomArticles, randomArticles, loading }) => {
  useEffect(() => {
    getRandomArticles();
  }, [getRandomArticles]);

  return (
    <div className='banner'>
      {loading ? (
        <Spinner />
      ) : (
        <Link to={`/event/${randomArticles[0].route}`}>
          <div className='post-img banner-img'>
            <div>
              <span>{randomArticles[0].title}</span>
              <p>{randomArticles[0].subtitle}</p>
            </div>
            <img
              src={`/img/articles/${randomArticles[0].img}`}
              alt={randomArticles[0].title}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

RandomArticle.propTypes = {
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
)(RandomArticle);
