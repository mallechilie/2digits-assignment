import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: 'whitesmoke',
        m: '5px',
        p: '3px',
      }}>
      <Typography>{children}</Typography>
    </Box>
  );
}
