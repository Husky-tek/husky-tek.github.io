import { createTheme } from '@mui/material/styles';
import background from './assets/stars.jpg';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // This makes the background stay in place while scrolling
          backgroundPosition: 'center',
        },
      },
    },
  },
});

export default theme;