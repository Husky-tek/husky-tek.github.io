    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/NavBar';
    import Projects from './components/projects';
    import Blog from './Blog'
    import BlogPost from './components/BlogPost';
    import { Box, Card, Typography, Container } from '@mui/material';
    import Button from '@mui/material/Button'
    import Resume from './assets/JamesCatbaganResume2025.pdf'
     
    
    const Home = () => (
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)', // Adjust based on Navbar height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          p: { xs: 5, md: 3 }, // Add padding
        }}
      >

        <Card sx={{backgroundColor: 'rgba(0,0,0,0.5)', p: { xs: 2, md: 4 } }}>
          <Typography variant='h2' sx={{ mb: 2 }}>Hello, I'm James Catbagan</Typography>
          <Typography variant='body1' >I'm a CS student @ UTEP focusing on web development who is also a game dev hobbyist.</Typography>
          <a href={Resume} target='_blank' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ mt: 2 }}>Resume Download</Button>
          </a>
        </Card>
        
        
      </Box>
    );

    function App() {
      return (
        
        <div>
          
          <Navbar />
          <Container component="main" sx={{ py: 4 }}>
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postId" element={<BlogPost />} />
              </Routes>
            
            
          </Container>
          
        </div>
      );
    }

    export default App;