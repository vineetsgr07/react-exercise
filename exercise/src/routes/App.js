import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

import Landing from './Landing';
import PrivateRoute from './PrivateRoute';

import TopBar from '../components/TopBar';
import Home from '../containers/Home';
import SignUp from '../components/SignUp';
import UserList from '../containers/User/UserList';
import UserDetails from '../containers/User/UserDetails';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <TopBar />
                    <div className="main center">
                        <Route exact path="/"  render={() => <Landing />} />
                        <Route path="/home" render={() => <Home />}   />
                        <Route path="/sign-up" component={SignUp} />
                        <PrivateRoute
                            path="/user-list"
                            redirectPath="/home"
                            isAuthenticated={this.props.isUserLogged}
                            component={UserList} />
                        <PrivateRoute
                            path="/user-details/:userId"
                            redirectPath="/home"
                            isAuthenticated={this.props.isUserLogged}
                            component={UserDetails} />
                    </div>
                </div>
            </Router>
        )
    }
}

App.propTypes = {
    isUserLogged: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isUserLogged: state.login.isUserLogged
    };
};

export default connect(mapStateToProps)(App);
