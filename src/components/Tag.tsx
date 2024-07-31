import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tag(props: { tagName: string }) {
  return (
    <Box
      sx={{
        width: 'fit-content',
        borderRadius: 1,
        backgroundColor: '#EFEFF8',
        m: '5px',
        py: '4px',
        px: '20px',
      }}>
      <Typography>{props.tagName.toUpperCase()}</Typography>
    </Box>
  );
}
