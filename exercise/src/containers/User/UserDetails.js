import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserByNickName } from '../../redux/reducers/rootReducer';
import Breadcrumb from '../../components/Breadcrumb';
import { Table, Card } from "react-bootstrap";

class UserDetails extends Component {
  render() {
    let user = this.props.user;
    let pages = [{
      path: "/home",
      label: "Home"
    }, {
      path: "/user-list",
      label: "User List"
    }, {
      path: `/user-details/${this.props.match.params.userId}`,
      label: this.props.match.params.userId
    }]
    return (
      <React.Fragment>
        <Breadcrumb pages={pages} />
        <div style={center}>
          <Card border="info" style={{ width: window.innerWidth / 5 }}>
            <Card.Header>{`${user.name.first} ${user.name.last}`}</Card.Header>
            <Card.Body>
              <Card.Title style={center}>
                <img style={avatarCircle}
                  alt="User Pic"
                  src={user.picture.large}
                />
              </Card.Title>
              <Card.Text>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <td>Cell</td>
                      <td>{user.cell}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{user.location.country}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </React.Fragment>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUserByNickName(state.users, ownProps.match.params.userId)
  };
};

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const avatarCircle = {
  borderRadius: '50%',
}

export default connect(mapStateToProps)(UserDetails);