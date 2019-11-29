import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let renderRoute = (props) => {
        return rest.isAuthenticated
            ? (<Component {...props} />)
            : (<Redirect to={rest.redirectPath} />)
    }

    return (<Route {...rest} render={(props) => renderRoute(props)} />);
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired, 
    path: PropTypes.string.isRequired, 
    redirectPath: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

export default PrivateRoute;