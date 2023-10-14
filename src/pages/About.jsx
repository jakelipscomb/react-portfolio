import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            About Me
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            I am a full stack web developer with a passion for learning and creating. I am a recent graduate of the University of Utah's Full Stack Web Development Bootcamp. I am currently seeking a position as a full stack web developer. I am a hard worker and a quick learner. I am excited to continue to learn and grow as a developer.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ height: 500, width: 500 }}
        image={require("../assets/images/html-css-js.gif")}
        alt="Live from space album cover"
      />
    </Card>
  );
}
