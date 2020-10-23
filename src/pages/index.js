import React from 'react';
// import { Link } from "gatsby"

import Container from 'react-bootstrap/esm/Container';
import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSection from '../components/Homepage/mainSection';
import ShowCase from '../components/Homepage/showcase';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <ShowCase />
    <Container className="container-home">{/* <Project /> */}</Container>
  </Layout>
);

export default IndexPage;
