import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import validator from 'validator';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEmailValid = (value) => validator.isEmail(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid(email)) {
      console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <Card sx={{ display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h5" component="div">
              Contact Me
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Button variant="outlined" onClick={() => window.location.href = 'mailto:jlipscombtx95@gmail.com'} sx={{ m: 2 }}>
              <MailIcon sx={{ mr: 1 }} />
              Email
            </Button>
            <Button variant="outlined" onClick={() => window.location.href = 'tel:+9564077952'} sx={{ m: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              Phone Number
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, pr: 2 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                error={emailError !== ''}
                helperText={emailError}
              />
              <TextField
                label="Leave a message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            sx={{ width: 600 }}
            src={require("../assets/images/ellsworthkelly.jpg")}
            alt="multi-colored art building"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Contact;
