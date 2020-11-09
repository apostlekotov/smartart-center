import axios from 'axios';
import { setAlert } from './alert';
import { SEND_LETTER, GET_LETTERS, DELETE_LETTER, POST_ERROR } from './types';

// Send a letter
export const sendLetter = (name, email, message) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, message });

  try {
    const res = await axios.post('/api/mailbox', body, config);

    dispatch({
      type: SEND_LETTER,
      payload: res.data
    });

    dispatch(setAlert('Лист відправленно', 'success'));
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

// Get letters
export const getLetters = () => async dispatch => {
  try {
    const res = await axios.get('/api/mailbox');

    dispatch({
      type: GET_LETTERS,
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
export const deleteLetter = id => async dispatch => {
  try {
    await axios.delete(`/api/mailbox/${id}`);

    dispatch({
      type: DELETE_LETTER,
      payload: id
    });

    dispatch(setAlert('Letter Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
