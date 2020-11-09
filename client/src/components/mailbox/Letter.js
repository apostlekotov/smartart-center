import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLetter } from '../../actions/mailbox';

const Letter = ({
  deleteLetter,
  letter: { _id, name, email, message, date }
}) => {
  return (
    <div className='letter'>
      <span>
        Від <b>{name}</b>, <b>{email}</b>
      </span>
      <p>{message}</p>
      <div>
        <span>
          Надіслано <Moment format='DD/MM/YYYY'>{date}</Moment>
        </span>
        <button
          onClick={e => deleteLetter(_id)}
          type='button'
          className='rounded-btn red-btn'
        >
          <i className='fas fa-times' />
        </button>
      </div>
    </div>
  );
};

Letter.propTypes = {
  letter: PropTypes.object.isRequired,
  deleteLetter: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLetter }
)(Letter);
