import React from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Projects() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 150000 }}
      preloadImages={false}
      lazy={true}
    >
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
        <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require('../assets/images/mock-restaurant-build.gif')}
            title="Mock Restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mock Restaurant
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The purpose of this project was to create a functional and responsive framework for a restaurant 
            website that would help developers get started with client criteria. The project contains many aspects 
            that offline businesses would need to have to advertise an online presence, such as the ability for users 
            to place online orders.
            </Typography>
          </CardContent>
          <CardActions sx={{ mx: 'auto', width: 275 }}>
            <Button size="small" position="center" href='https://github.com/jakelipscomb/mock-restaurant'>
              GitHub Repository
            </Button>
            <Button size="small" position="center" href='https://mock-restaurant-9eb3720005cf.herokuapp.com/'>
              Live Demo
            </Button>
          </CardActions>
        </Card>
      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require("../assets/images/text-editor.png")}
            title="J.A.T.E. Text Editor"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              J.A.T.E. Text Editor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              J.A.T.E. is a text editor that allows users to create, edit, and save files. The application is built using
              React.js and is deployed through Heroku.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/mock-restaurant'>GitHub Repository</Button>
            <Button size="small" href='https://github.com/jakelipscomb/mock-restaurant'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require("../assets/images/WoDN-fullpage.png")}
            title="Wheels of Date Night"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wheels of Date Night
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wheels of Date Night is a web application that allows users to search for a movie and cuisine by spinning two wheels.
              The application was a group effort that was built using HTML, CSS, JavaScript, Spoonacular API, and themoviedb API.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/wheels-of-date-night-project-1'>GitHub Repository</Button>
            <Button size="small" href='https://esbev.github.io/project-1-collab/'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require("../assets/images/weatherapp2.png")}
            title="Weather Forecast"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Forecast
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This application allows users to search for a city and see the current weather conditions as well as a five day forecast. 
              The application is built using HTML, CSS, JavaScript, and the OpenWeather API.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/weather-dashboard'>GitHub Repository</Button>
            <Button size="small" href='https://jakelipscomb.github.io/weather-dashboard/'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require("../assets/images/note-taker.png")}
            title="Note Taker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Note Taker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The purpose of this project is to create an application called Note Taker that can be used to write and save notes. 
              This application will use an Express.js back end and will save and retrieve note data from a JSON file.
              The application is built using HTML, CSS, JavaScript, Express.js, and Node.js.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/note-taker'>GitHub Repository</Button>
            <Button size="small" href='https://jakelipscomb-note-taker-0f34dac376d0.herokuapp.com/'>Live Demo</Button>
            <Button size="small" href='https://www.youtube.com/watch?v=xKw0yk2zAt8'>YouTube Tutorial</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={require("../assets/images/employee-tracker.png")}
            title="Employee Tracker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Employee Tracker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The purpose of this project is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.
              The application is built using JavaScript, Node.js, Inquirer, and MySQL.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/employee_tracker'>GitHub Repository</Button>
            <Button size="small" href='https://www.youtube.com/watch?v=MV7hX06sJKQ'>Live Demo on YouTube</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
    </Swiper>
  );
}
