import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserByNickName } from '../../redux/reducers/rootReducer';
import Breadcrumb from '../../components/Breadcrumb';
import { Table, Card } from "react-bootstrap";

function UserDetails({ user, match }) {

  const { name, email, phone, cell, location, picture } = user;
  const { params: { userId } } = match

  let pages = [{
    path: "/home",
    label: "Home"
  }, {
    path: "/user-list",
    label: "User List"
  }, {
    path: `/user-details/${userId}`,
    label: userId
  }]

  return (
    <React.Fragment>
      <Breadcrumb pages={pages} />
      <div style={center}>
        <Card border="info" style={{ width: window.innerWidth / 5 }}>
          <Card.Header>{`${name.first} ${name.last}`}</Card.Header>
          <Card.Body>
            <Card.Title style={center}>
              <img style={avatarCircle}
                alt="User Pic"
                src={picture.large}
              />
            </Card.Title>
            <Card.Text>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>{cell}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{location.country}</td>
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

UserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUserByNickName(state.users, ownProps.match.params.userId)
  };
};

export default connect(mapStateToProps)(UserDetails);

/**
 * Styles
 */
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const avatarCircle = {
  borderRadius: '50%',
}
