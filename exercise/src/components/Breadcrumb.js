import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = ({ pages }) => {
  return (
    <React.Fragment>
      <Breadcrumb>
        {pages.map(({ path, label }, index) =>
          <Breadcrumb.Item key={index}>
            <Link to={path}>{label}</Link>
          </Breadcrumb.Item>)}
      </Breadcrumb>
    </React.Fragment>
  );
};

Breadcrumb.propTypes = {
  pages: PropTypes.array.isRequired
};

export default Breadcrumbs;
