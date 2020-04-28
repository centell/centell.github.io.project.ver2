import React from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Copyright from '@components/Copyright';
import SNS from '@components/SNS';

const Index = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Grid container alignItems="center" justify="center" style={{ width: '100%' }}>
        <img src="/static/images/rlidea_logo.jpg" alt="rlidea logo" />
      </Grid>
      <SNS />
      <Copyright />
    </Box>
  </Container>
);

export default Index;
