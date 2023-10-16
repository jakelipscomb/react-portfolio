import { Container, Typography, Button } from '@mui/material';

const Resume = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p:'10px' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', m: 2, textDecoration: 'strong' }}>
        Check out and download my resume here!
      </Typography>
      <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p:'10px' }} variant="contained" href="resume2023.pdf" download>
        Download Resume
        </Button>
      <object data="resume2023.pdf" type="application/pdf" width="100%" height="600px"></object>
    </Container>
  );
};

export default Resume;
