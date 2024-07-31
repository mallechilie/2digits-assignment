import * as React from 'react';

import Box from '@mui/material/Box';

export default function Header(props: { imageUrl: string }) {
  return (
    <Box
      sx={{
        backgroundImage: props.imageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 450,
      }}
      style={{ filter: 'grayscale(100%)' }}
    />
  );
}
