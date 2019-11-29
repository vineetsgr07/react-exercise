import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

import { logInUser, logOutUser, clearErrMsg } from "../redux/actions/actions";

import { Button } from "react-bootstrap"

import WelcomeScreen from "./Welcome";

const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const screen = {
  width: '100%',
  height: window.innerHeight / 2,
}

class Home extends Component {
  componentWillUnmount() {
    this.props.clearMsg();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-12 col-lg-12">
          <div className="grey-panel flex-colum">
            {
              !this.props.isUserLogged ? (
                <div style={{ ...center, ...screen }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title style={center}>User Portal</Card.Title>
                      <Card.Text style={center}>
                        <Button onClick={this.props.userLogIn} >LogIn</Button>
                      </Card.Text>
                      <Card.Subtitle className="mb-2 text-muted" style={center}>
                        {this.props.error && (<p className="error">{this.props.error}</p>)}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>)
                : (
                  <div>
                    <WelcomeScreen />
                  </div>
                )}
          </div>
        </div>
      </div >
    );
  }
}

Home.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    isUserLogged: state.login.isUserLogged,
    error: state.login.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLogIn: () => dispatch(logInUser()),
    userLogOut: () => dispatch(logOutUser()),
    clearMsg: () => dispatch(clearErrMsg())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
