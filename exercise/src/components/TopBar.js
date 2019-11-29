import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { logInUser, logOutUser } from '../redux/actions/actions'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class TopBar extends Component {

  render() {
    return (
      <header style={header}>
        <div style={logo}>
          <Link to="/">
            <img alt={'logo'} style={logoImage} src="favicon-196x196.png" />
          </Link>
        </div>
        <div>{'Modus Create'}</div>
        <div style={logoText} />
        {
          this.props.isUserLogged ?
            (
              <div style={{
                float: '',
                paddingRight: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={avatarCircle}>
                  <span style={initials}>
                    {` ${this.props.userData.firstName.charAt(0)}${this.props.userData.lastName.charAt(0)} `}
                  </span>
                </div>
                <Button variant="primary" onClick={this.props.userLogOut}> LogOut </Button>
              </div>
            ) : (
              <div style={loginBtn}>
                <Button variant="primary" onClick={this.props.userLogIn}>LogIn</Button>
                <Link to="/sign-up" style={ml8} className='btn btn-danger'>SignUp</Link>
              </div>
            )
        }
      </header>
    );
  }
}

TopBar.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  userLogIn: PropTypes.func.isRequired,
  userLogOut: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isUserLogged: state.login.isUserLogged,
    userData: state.login.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogIn: () => dispatch(logInUser()),
    userLogOut: () => {
      return dispatch(logOutUser())
    }
  };
};

const header = {
  height: 48,
  width: '100%',
  backgroundColor: 'rgb(102,63,180)',
  color: 'white',
  padding: '6px 10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}
const logo = { float: 'left', margin: 8 }
const logoImage = { maxHeight: 40, flex: 1 }
const logoText = { float: 'left', color: 'white', flex: 1 }
const ml8 = { marginLeft: 8 }
const loginBtn = { float: 'right', paddingRight: 20, display: 'flex' }
const avatarCircle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#17a2b8',
  textAlign: 'center',
  borderRadius: '50%',
  marginRight: '8px'
}
const initials = {
  position: 'relative',
  fontSize: '20px', /* 50% of parent */
  lineHeight: '45px', /* 50% of parent */
  color: ' black !important',
  fontFamily: "'Courier New', monospace",
  fontWeight: 'bold'
}


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
