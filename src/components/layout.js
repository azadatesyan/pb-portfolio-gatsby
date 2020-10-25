/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/navbar';
import NavDrawer from './Navbar/navDrawer';
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <NavDrawer open={menuOpen} />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
