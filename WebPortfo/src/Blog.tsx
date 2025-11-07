import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import postsData from './components/Blog/blogposts.json';

interface Post {
  id: number | string;
  title: string;
  date: string;
  summary: string;
}

const posts: Post[] = postsData;

export default function Blog() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Blogposts
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        
        {[...posts].reverse().map((post) => (
          <Grid size = {13} item xs={12} sm={10} md={8} key={post.id}>
            <Card>
              <CardActionArea component={RouterLink} to={`/blog/${post.id}`}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                    {post.date}
                  </Typography>
                  <Typography variant="body1">
                    {post.summary}
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