import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getAllArticlesPreview } from '../../actions/article';
import ArticlePreview from './ArticlePreview';

const AllArticles = ({ getAllArticlesPreview, articles, loading }) => {
  useEffect(() => {
    getAllArticlesPreview();
  }, [getAllArticlesPreview]);

  return (
    <Fragment>
      <Helmet>
        <title>SmartArt - Всі статті</title>
        <meta
          name='description'
          content='Центр розвитку дитини Smart Art – територія, де досвідчені педагоги
        розкривають таланти та плекають зернини творчості та
        індивідуальності кожної дитини.'
        />
      </Helmet>

      <section className='all-articles main-section'>
        <div className='section-header'>
          <h1 className='hidden'>SmartArt</h1>
          <h2>Всі статті</h2>
          <div className='stripe'></div>
        </div>

        {articles.length > 0 ? (
          loading ? (
            <Spinner />
          ) : (
            articles.map(article => (
              <ArticlePreview key={article._id} article={article} />
            ))
          )
        ) : (
          <p>Порожньо</p>
        )}
      </section>
    </Fragment>
  );
};

AllArticles.propTypes = {
  getAllArticlesPreview: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  articles: state.article.articles,
  loading: state.article.loading
});

export default connect(
  mapStateToProps,
  { getAllArticlesPreview }
)(AllArticles);
