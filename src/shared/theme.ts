import { createTheme } from '@material-ui/core';

import { fontFamily } from './styles';

const theme = createTheme({
  typography: {
    fontFamily,
    htmlFontSize: 13,
    fontSize: 13,
    h1: {
      fontSize: '2.4375rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
