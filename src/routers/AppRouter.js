import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AboutPage from '../components/About';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import notFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import createMockStore from 'redux-mock-store';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

// These are all placeholders for components that haven't been defined yet

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header />
        <Switch>
            <Route path="/" component ={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component ={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component ={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component ={EditExpensePage} />
            <Route path="/about" component ={AboutPage} />
            <Route component ={notFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;