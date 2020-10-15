import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '@components/Copyright';
import Menu from '@components/Menu';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Menu />
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          웹 개발자.
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
