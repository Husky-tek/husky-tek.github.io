import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projects from './Blog/projects.json';
import { CardActionArea } from '@mui/material';

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2  }}>
      <Grid container spacing={1}>
        {projects.map((project: any) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ maxWidth: 500, height: '100%' }}>
              <CardActionArea href={project.github} target='_blank'>
              {project.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="a"
                  href={project.imageLink}
                  target="_blank"
                >
                  {project.imageAuthor}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
