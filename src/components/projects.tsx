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
      <Grid container spacing={2}>
        {projects.map((project: any) => (
          <Grid  key={project.id}>
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
                <a href={project.imageLink} style={{ marginTop: '8px', color: 'lightgray' } } target='_blank'>Photo by {project.imageAuthor}</a>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
