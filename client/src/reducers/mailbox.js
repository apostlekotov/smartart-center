import {
  SEND_LETTER,
  GET_LETTERS,
  DELETE_LETTER,
  POST_ERROR
} from '../actions/types';

const initialState = {
  letters: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LETTERS:
      return {
        ...state,
        letters: payload,
        loading: false
      };
    case SEND_LETTER:
      return {
        ...state,
        letters: [payload, ...state.letters],
        loading: false
      };
    case DELETE_LETTER:
      return {
        ...state,
        letters: state.letters.filter(letter => letter._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
