import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticle } from '../../actions/article';

const ArticlePreview = ({
  auth,
  deleteArticle,
  article: { _id, title, route, subtitle, img }
}) => {
  return (
    <Fragment>
      <div className='banner'>
        <Link to={`/event/${route}`}>
          <div className='post-img banner-img'>
            <div>
              <span>{title}</span>
              <p>{subtitle}</p>
            </div>
            <img src={`img/articles/${img}`} alt={title} />
          </div>
        </Link>
      </div>
      {auth.isAuthenticated && (
        <div className='banner-delete'>
          <button
            onClick={() => deleteArticle(_id)}
            type='button'
            className='rounded-btn red-btn'
          >
            <i className='fas fa-times' />
          </button>
        </div>
      )}
    </Fragment>
  );
};

ArticlePreview.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    deleteArticle
  }
)(ArticlePreview);
