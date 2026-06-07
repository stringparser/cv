export const fontFamily =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

export const globalStyles = {
  '@global': {
    body: {
      direction: 'ltr',
      lineHeight: 1.65,

      fontSize: '13px',
      fontFamily,
      textRendering: 'optimizeLegibility',
      scrollBehavior: 'smooth',
      fontFeatureSettings: "'kern'",
      WebkitFontSmoothing: 'antialiased',

      margin: '0 auto',
      padding: '0',

      // '&:before': {
      //   content: '',
      //   position: 'absolute',
      //   top: 0,
      //   right: 0,
      //   border: '25px solid transparent',
      //   borderColor: 'rgba(0,0,0,0.8) rgba(0,0,0,0.8) transparent transparent',
      // },
    },

    p: {
      margin: 'unset',
      maxWidth: '100%',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    },

    a: {
      fontWeight: 'bold',
      textDecoration: 'none',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    },

    hr: {
      margin: 0,
      border: 'none',
      height: '1rem',
    },

    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },

    li: {
      minWidth: 0,
      maxWidth: '100%',
    },

    quote: {
      padding: '0.5rem 0.75rem',
      maxWidth: '20rem',
      marginTop: '1.25rem',
      background: 'rgba(0,0,0,0.04)',
      borderLeft: '2px forestgreen solid',
    },

    'h1, h2, h3, h4, h5, h6': {
      margin: 'unset',
      lineHeight: 'inherit',
    },

    '.job-title': {
      fontWeight: 700,
    },

    '@media print': {
      body: {
        margin: 0,
        printColorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact',
      },
    },

    '@page': {
      size: 'A4',
      margin: '12mm',
    },
  },
};
