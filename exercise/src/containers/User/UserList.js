import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';

import { loadUserList } from '../../redux/actions/actions';
import { Table } from 'react-bootstrap';

function UserList({ loadUserList, history, users }) {

  useEffect(() => {
    loadUserList();
  },[]);

  const goToUserDetails = (name) => {
    let encodedUserName = encodeURI(name);
    history.push(`/user-details/${encodedUserName}`);
  }

  let pages = [{
    path: "/home",
    label: "Home"
  }, {
    path: "/user-list",
    label: "User List"
  }];

  return (
    <React.Fragment>
      <Breadcrumb pages={pages} />
      <Table striped bordered hover >
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(({ login, name, email, location }, index) =>
            <tr key={index} style={pointer} onClick={() => goToUserDetails(login.username)}>
              <td className="capital">{name.title}.</td>
              <td className="capital">{`${name.first} ${name.last}`}</td>
              <td className="capital">{name.Phone}</td>
              <td>{email}</td>
              <td>{location.country}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loadUserList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserList: () => dispatch(loadUserList())
  };
};

const pointer = {
  cursor: 'pointer'
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);