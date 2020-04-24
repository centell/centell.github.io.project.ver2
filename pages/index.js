import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Copyright from '@components/Copyright';
import Logo from '@components/RLideaLogo';
import SNS from '@components/SNS';

const Index = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Grid container alignItems="center" justify="center">
        <Typography variant="h4" component="h1" gutterBottom>
          {process.env.APP_NAME}
        </Typography>
      </Grid>
      <Logo />
      <SNS />
      <Copyright />
    </Box>
  </Container>
);

export default Index;
