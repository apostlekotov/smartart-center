import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const adminLinks = (
    <nav>
      <NavLink exact to='/mailbox' activeClassName='active' className='link'>
        Пошта
      </NavLink>
      <NavLink to='/all-events' activeClassName='active' className='link'>
        Події
      </NavLink>
      <a onClick={logout} href='#!' className='rounded-btn black-btn'>
        Вийти <i className='fas fa-sign-out-alt'></i>
      </a>
    </nav>
  );

  const userLinks = (
    <nav>
      <NavLink exact to='/about' activeClassName='active' className='link'>
        Про нас
      </NavLink>
      <NavLink exact to='/services' activeClassName='active' className='link'>
        Програми та курси
      </NavLink>
      <NavLink to='/events' activeClassName='active' className='link'>
        Події
      </NavLink>
      <a href='/#contacts' className='rounded-btn black-btn'>
        Контакти
      </a>
    </nav>
  );

  return (
    <header>
      <div>
        <Link to='/' className='logo'>
          <img src='img/logo.svg' alt='SmartArt logo' height='50px' />
        </Link>
        <button id='onoff'>
          <i className='fas fa-bars'></i>
        </button>
        {!loading && (
          <Fragment> {isAuthenticated ? adminLinks : userLinks} </Fragment>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
