import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';

import { loadUserList } from '../../redux/actions/actions';
import { Table } from 'react-bootstrap';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.goToUserDetails = this.goToUserDetails.bind(this);
  }

  componentDidMount() {
    this.props.loadUserList();
  }

  goToUserDetails(name) {
    let encodedUserName = encodeURI(name);
    this.props.history.push(`/user-details/${encodedUserName}`);
  }

  render() {
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
            {this.props.users.map((user, index) =>
              <tr style={pointer} onClick={() => this.goToUserDetails(user.login.username)}>
                <td className="capital">{user.name.title}.</td>
                <td className="capital">{`${user.name.first} ${user.name.last}`}</td>
                <td className="capital">{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.location.country}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
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