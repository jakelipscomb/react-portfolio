import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#333', color: 'yellow', padding: '20px 0' }}>
      <Container>
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
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
