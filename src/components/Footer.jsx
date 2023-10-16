import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { ThemeContext } from '../theme/ThemeContextProvider';
import { useContext } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const { theme, toggleColorMode } = useContext(ThemeContext);

  const backgroundColor = theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800];

  return (

      <Container sx={{ backgroundColor, primary: 'inherit', padding: '20px 0' }}>
        <Typography variant="body2" align="center">
          © 2023 Jake Lipscomb | Portfolio
        </Typography>
        <Typography variant="body2" align="center">
          All Rights Reserved.
        </Typography>
        <Grid container justifyContent="center" spacing={2} style={{ marginTop: '10px' }}>
          <Grid item>
            <Link href="https://github.com/jakelipscomb" target="_blank" rel="noopener noreferrer" color="inherit">
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/in/jake-lipscomb/" target="_blank" rel="noopener noreferrer" color="inherit">
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="tel:+9564077952" color="inherit">
              <PhoneIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/FallenZero_JL" color="inherit">
              <TwitterIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Footer;