import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tag(props: { tagName: string }) {
  return (
    <Box
      sx={{
        width: 'fit-content',
        borderRadius: 1,
        backgroundColor: 'whitesmoke',
        m: '5px',
        p: '3px',
      }}>
      <Typography>{props.tagName}</Typography>
    </Box>
  );
}
