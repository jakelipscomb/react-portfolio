import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function Projects() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item md={12}>
    <Item>
    <Card sx={{ maxWidth: 600, m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 600 }}
            image={require("../assets/images/mock-restaurant-build.gif")}
            title="Mock Restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mock Restaurant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ mx: 'auto', width: 275 }}>
            <Button size="small" position="center" >GitHub Repository</Button>
            <Button size="small" position="center">Live Demo</Button>
          </CardActions>
        </Card>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Card sx={{ maxWidth: 345, m: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../assets/images/text-editor.png")}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">GitHub Repository</Button>
            <Button size="small">Live Demo</Button>
          </CardActions>
        </Card>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Card sx={{ maxWidth: 345, m: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../assets/images/text-editor.png")}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">GitHub Repository</Button>
            <Button size="small">Live Demo</Button>
          </CardActions>
        </Card>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Card sx={{ maxWidth: 345, m: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../assets/images/text-editor.png")}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">GitHub Repository</Button>
            <Button size="small">Live Demo</Button>
          </CardActions>
        </Card>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Card sx={{ maxWidth: 345, m: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../assets/images/text-editor.png")}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">GitHub Repository</Button>
            <Button size="small">Live Demo</Button>
          </CardActions>
        </Card>
    </Item>
  </Grid>
</Grid>
        
    );
}