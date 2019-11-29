import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { signUpUser, clearErrMsg } from '../redux/actions/actions'
import { Card } from 'react-bootstrap';

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const verticalAlign = {
    height: window.innerHeight / 2
}

function SignUp({ setUserData, history, error }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sending, setSending] = useState(false)

    const signUpUser = () => {
        let userData = {
            firstName: firstName,
            lastName: lastName
        }

        if (!sending) {
            setSending(true);
            setUserData(userData)
                .then(() => {
                    setSending(false);
                    !error && history.push('/home');
                });
        }
    }

    const formAction = (e) => {
        e.preventDefault()
    }

    return (
        <div style={{ ...center, ...verticalAlign }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={center} >Please Sign Up!</Card.Title>
                    <Card.Text>
                        <form
                            onSubmit={formAction}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="first name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="last name"
                                    name="lastName"
                                    autoComplete="off"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            {
                                error
                                && (<span className="error">{error}</span>)
                            }
                            <div style={center}>
                                <Button
                                    onClick={signUpUser}
                                    propClass='btn btn-primary'>
                                    SignUp
                                    </Button>
                            </div>
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

SignUp.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        user: state.login.userData,
        error: state.login.authError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => dispatch(signUpUser(data)),
        clearMsg: () => dispatch(clearErrMsg())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
