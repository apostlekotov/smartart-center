import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getLetters } from '../../actions/mailbox';
import Letter from './Letter';

const Mailbox = ({ getLetters, letters, loading }) => {
  useEffect(() => {
    getLetters();
  }, [getLetters]);

  return (
    <section className='main-section'>
      <div className='section-header'>
        <h1 className='hidden'>SmartArt</h1>
        <h2>Пошта</h2>
        <div className='stripe'></div>
      </div>

      <div className='letters'>
        {letters.length > 0 ? (
          loading ? (
            <Spinner />
          ) : (
            <div className='letters'>
              {letters.map(letter => (
                <Letter key={letter._id} letter={letter} />
              ))}
            </div>
          )
        ) : (
          <p>Листів нема</p>
        )}
      </div>
    </section>
  );
};

Mailbox.propTypes = {
  getLetters: PropTypes.func.isRequired,
  letters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  letters: state.mailbox.letters,
  loading: state.mailbox.loading
});

export default connect(
  mapStateToProps,
  { getLetters }
)(Mailbox);
