import { createTheme } from '@material-ui/core';

import { fontFamily } from './styles';

const theme = createTheme({
  typography: {
    fontFamily,

    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
  },
});

export default theme;
