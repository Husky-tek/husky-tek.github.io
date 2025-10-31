import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';
import posts from './Blog/blogposts.json';

export default function BlogPost() {
  // Get the postId from the URL
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id.toString() === postId);
  
 

  if (!post) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5">Blog post not found!</Typography>
        <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 2 }}>
          GO BACK
        </Button>
      </Box>
    );
  }



  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {post.date}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {post.content}
        </Typography>
      </Paper>
    </Box>
  );
}