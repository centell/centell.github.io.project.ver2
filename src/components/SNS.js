import React from 'react';
import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid } from '@material-ui/core';

const Container = styled('div')`
  padding: 5px;
`;

export default function Copyright() {
  return (
    <Grid container alignItems="center" justify="center">
      <Container>
        <Link href="https://twitter.com/centell_" target="_blank">
          <TwitterIcon />
        </Link>
      </Container>
    </Grid>
  );
}
