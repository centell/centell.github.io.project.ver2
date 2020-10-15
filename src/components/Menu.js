import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Link from '@components/Link';

const Container = styled('div')`
  padding: 5px;
`;

export default function Copyright() {
  return (
    <Grid container alignItems="center" justify="center">
      <Container>
        <Link color="inherit" href="/">Home</Link>
        {' | '}
        <Link color="inherit" href="/projects">Projects</Link>
        {' | '}
        <Link color="inherit" href="/about">About</Link>
      </Container>
    </Grid>
  );
}
