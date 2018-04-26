import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const content = `


This website is dedicated to showing you all the fun things we come across here in Polkton, NC.  
Whether its a new litter of Cane Corso puppies or a shy pot-bellied pig we got you covered!

`;

const Home = ({ data }) => {

  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Life on the hill</Typography>
        <Typography component={Markdown} source={content} />
        <Button component={Link} to="/services" variant="stroked">
          Check out the pups!
        </Button>
      </Grid>
    </Section>
  );
};
export default Home;
