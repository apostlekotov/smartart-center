import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';

// Components
import About from '../layout/About';
import Services from '../layout/Services';
import Events from '../events/Events';
import Event from '../events/Event';
import AllArticles from '../events/AllArticles';
import Registration from '../auth/Registration';
import Login from '../auth/Login';
import Adminka from '../adminka/Adminka';
import Mailbox from '../mailbox/Mailbox';
import CreateArticle from '../events/CreateArticle';
import Footer from '../layout/Footer';
import Alert from '../layout/Alert';
import NotFound from '../layout/ NotFound';

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/event/:route' component={Event} />
        <Route exact path='/all-events' component={AllArticles} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <PrivateRoute exact path='/adminka' component={Adminka} />
        <PrivateRoute exact path='/mailbox' component={Mailbox} />
        <PrivateRoute exact path='/create-article' component={CreateArticle} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routes;
