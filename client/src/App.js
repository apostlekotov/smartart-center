import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from 'react-router-scroll-top';

// Components
import Preloader from './components/layout/Preloader';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadAdmin } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// CSS
import './css/App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop />
        <Fragment>
          <Helmet>
            <title>SmartArt</title>
          </Helmet>

          <Preloader />
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
