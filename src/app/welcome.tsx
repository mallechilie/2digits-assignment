import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://picsum.photos/1440/600?grayscale&blur=4)`,
        backgroundSize: 'cover',
        minHeight: 600,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Typography variant="h1" sx={{ color: 'white', width: 5 / 10 }}>
        WELCOME TO THE 2DIGITS CASE!
      </Typography>

      <Typography variant="h4" sx={{ color: 'white', width: 6 / 10 }} component="div">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mi vitae tellus congue
        pellentesque. Sed consequat sed erat nec euismod. Cras justo dui, iaculis eget purus quis,
        eleifend condimentum nisi. Curabitur a lectus metus. Ut malesuada ligula sed libero molestie
        malesuada. Nulla vel ipsum lacinia, ultricies nunc non, pellentesque.
      </Typography>
    </Box>
  );
}
