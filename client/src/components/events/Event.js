import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getArticle } from '../../actions/article';
import RandomArticle from './RandomArticle';

const Event = ({ getArticle, article, loading, match }) => {
  useEffect(() => {
    getArticle(match.params.route);
  }, [getArticle, match.params.route]);

  return (
    <section className='main-section article'>
      {article === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Helmet>
            <title>{article.title} - SmartArt</title>
            <meta
              name='description'
              content={`${article.title} - ${article.subtitle}`}
            />
          </Helmet>

          <div className='section-header'>
            <h1>{article.title}</h1>
            <h2 className='subtitle'>{article.subtitle}</h2>
          </div>

          <div className='article-img'>
            <img src={`/img/articles/${article.img}`} alt={article.title} />
          </div>

          <div className='article-content'>
            <p dangerouslySetInnerHTML={{ __html: article.text }}></p>
            <div className='author'>
              {article.author && <i>Автор: {article.author}</i>}
            </div>
          </div>
        </Fragment>
      )}

      <RandomArticle />
    </section>
  );
};

Event.propTypes = {
  getArticle: PropTypes.func.isRequired,
  article: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  article: state.article.article,
  loading: state.article.loading
});

export default connect(
  mapStateToProps,
  { getArticle }
)(Event);
