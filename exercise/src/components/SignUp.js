import React from 'react';
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

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            sending: false
        };

        this.signUpUser = this.signUpUser.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleCommunicationState = this.handleCommunicationState.bind(this);
    }

    signUpUser() {
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }

        if (!this.state.sending) {
            this.handleCommunicationState(true);

            this.props.setUserData(userData)
                .then(() => {
                    this.handleCommunicationState(false);
                    !this.props.error && this.props.history.push('/home');
                });
        }
    }

    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCommunicationState(bool) {
        this.setState({
            sending: bool
        });
    }

    formAction(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div style={{ ...center, ...verticalAlign }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={center} >Please Sign Up!</Card.Title>
                        <Card.Text>
                            <form
                                onSubmit={this.formAction}
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleFormChange} 
                                        autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="last name"
                                        name="lastName"
                                        autoComplete="off"
                                        value={this.state.lastName}
                                        onChange={this.handleFormChange} />
                                </div>
                                {
                                    this.props.error
                                    && (<span className="error">{this.props.error}</span>)
                                }
                                <div style={center}>
                                    <Button
                                        onClick={this.signUpUser}
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
