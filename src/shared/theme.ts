import { createMuiTheme } from '@material-ui/core';

import { fontFamily } from 'src/shared/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily,

    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
  },
});

export default theme;
