import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Tooltip, Button } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ bgcolor: "#000080" }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            James Catbagan
          </Typography>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Tooltip title="Github">
            <IconButton color="inherit" component="a" href="https://github.com/Husky-tek" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip title="Linkedin">
            <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/james-catbagan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <LinkedIn />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}