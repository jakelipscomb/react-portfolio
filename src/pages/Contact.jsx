import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Add code to send form data to the server or API here
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

