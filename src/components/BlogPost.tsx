import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import postsData from './Blog/blogposts.json';

interface Post {
  id: number | string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export default function BlogPost() {
  const { postId } = useParams();
  const [postInfo, setPostInfo] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const post = (postsData as Post[]).find(p => String(p.id) === postId);

    if (post) {
      setPostInfo(post);
    } else {
      setError('Blog post not found.');
    }
    setLoading(false);
  }, [postId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!postInfo) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" component="h1" gutterBottom>{postInfo.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>{postInfo.date}</Typography>
      <Box sx={{ mt: 3 }} dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </Paper>
  );
}