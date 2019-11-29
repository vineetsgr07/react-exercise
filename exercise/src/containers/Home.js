import React, { useEffect } from "react";
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

function Home({ userLogIn, clearMsg, isUserLogged, error }) {

  useEffect(() => {
    return () => {
      clearMsg()
      console.log("cleaned up");
    };
  }, [])

  return (
    <React.Fragment>
      {
        !isUserLogged ? (
          <div style={{ ...center, ...screen }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={center}>User Portal</Card.Title>
                <Card.Text style={center}>
                  <Button onClick={userLogIn} >LogIn</Button>
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted" style={center}>
                  {error && (<p className="error">{error}</p>)}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>)
          : (
            <div>
              <WelcomeScreen />
            </div>
          )}
    </React.Fragment >
  );
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
