import axios from 'axios';
import { setAlert } from './alert';
import {
  CREATE_ARTICLE,
  GET_ARTICLES,
  GET_RANDOM_ARTICLES,
  GET_ARTICLE,
  DELETE_ARTICLE,
  POST_ERROR
} from './types';

// Create an article
export const createArticle = (
  title,
  subtitle,
  text,
  img,
  author
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  const formData = new FormData();
  formData.append('title', title);
  formData.append('subtitle', subtitle);
  formData.append('text', text);
  formData.append('img', img);
  formData.append('author', author);

  try {
    const res = await axios.post('/api/articles', formData, config);

    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data
    });

    dispatch(setAlert('Стаття створена', 'success'));
  } catch (err) {
    if (err.response) {
      err.response.data.errors.forEach(error =>
        dispatch(setAlert(error.msg, 'danger'))
      );

      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Get all articles
export const getArticles = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles');

    dispatch({
      type: GET_ARTICLES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all articles preview
export const getAllArticlesPreview = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles/all-preview');

    dispatch({
      type: GET_ARTICLES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get random articles
export const getRandomArticles = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles/random');

    dispatch({
      type: GET_RANDOM_ARTICLES,
      payload: res.data
    });
  } catch ({ response }) {
    if (response) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: response.statusText, status: response.status }
      });
    }
  }
};

// Get all articles
export const getArticlesPreview = () => async dispatch => {
  try {
    const res = await axios.get('/api/articles/preview');

    dispatch({
      type: GET_ARTICLES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all articles
export const getArticle = route => async dispatch => {
  try {
    const res = await axios.get(`/api/articles/${route}`);

    dispatch({
      type: GET_ARTICLE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Dalete letter
export const deleteArticle = id => async dispatch => {
  try {
    await axios.delete(`/api/articles/${id}`);

    dispatch({
      type: DELETE_ARTICLE,
      payload: id
    });

    dispatch(setAlert('Стаття видалена', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
