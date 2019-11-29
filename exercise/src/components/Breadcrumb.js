import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = props => {
  return (
    <Breadcrumb>
      {props.pages.map((elem, index) =>
        <Breadcrumb.Item key={index}>
          <Link to={elem.path}>{elem.label}</Link>
        </Breadcrumb.Item>)}
    </Breadcrumb>
  );
};

Breadcrumb.propTypes = {
  pages: PropTypes.array.isRequired
};

export default Breadcrumbs;
