/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/navbar';
import NavDrawer from './Navbar/navDrawer';
import Footer from './footer';
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

  useEffect(() => {
    console.log('Menu opened = ', menuOpen);
    if (menuOpen) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <NavDrawer open={menuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
