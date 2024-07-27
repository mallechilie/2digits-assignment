import * as React from 'react';

import Box from '@mui/material/Box';

export default function Header(props: { imageUrl: string }) {
  return (
    <Box
      sx={{
        backgroundImage: props.imageUrl,
        backgroundSize: 'cover',
        minHeight: 600,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    />
  );
}
