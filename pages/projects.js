import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '@components/Copyright';
import Menu from '@components/Menu';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Menu />
        <span>Personal Projects</span>
        <ul>
          <li><a color="inherit" rel="noopener noreferrer" href="https://github.com/rlidea/weaver-server" target="_blank">Weaver Framework</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="https://centell.me" target="_blank">centell.me</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="http://rlidea.com" target="_blank">rlidea.com</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="https://github.com/centell/sls-express-template" target="_blank">sls-express-template</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="https://github.com/centell/gb-unit" target="_blank">gb-unit</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="https://github.com/centell/create-element.js" target="_blank">create-element.js</a></li>
          <li><a color="inherit" rel="noopener noreferrer" href="https://github.com/centell/grid-system.css" target="_blank">grid-system.css</a></li>
        </ul>
        <Copyright />
      </Box>
    </Container>
  );
}
