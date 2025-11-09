import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
import posts from './Blog/blogposts.json';

export default function BlogPost() {
  // Get the postId from the URL
  const { postId } = useParams<{ postId: string }>();
  const postInfo = posts.find(p => p.id.toString() === postId);

  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (postInfo) {
      // Vite needs a relative path from the current file to the asset in the public directory
      // for the dynamic import to work correctly.
      const assetPath = `../${postInfo.content}`;

      import(/* @vite-ignore */ assetPath)
        .then(module => fetch(module.default)) // The module's default export is the resolved URL
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.text();
        })
        .then(text => setPostContent(text))
        .catch(err => {
          console.error("Failed to fetch post content:", err);
          setError('Failed to load post content.');
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [postInfo]);

  if (!postInfo) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5">Post not found, if you're trying to find something using a direct link i probably deleted it by now</Typography>
        <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 2 }}>
          GO BACK
        </Button>
      </Box>
    );
  }

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">error</Typography>;
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {postInfo.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {postInfo.date}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {postContent}
        </Typography>
      </Paper>
    </Box>
  );
}