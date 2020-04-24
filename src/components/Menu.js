import React from 'react';
import styled from 'styled-components';
import Link from '@components/Link';
import { Grid } from '@material-ui/core';

const Container = styled('div')`
  padding: 5px;
`;

export default function Copyright() {
  return (
    <Grid container alignItems="center" justify="center">
      <Container>
        <Link href="/">Home</Link>
        {' | '}
        <Link href="/about">About</Link>
      </Container>
    </Grid>
  );
}
