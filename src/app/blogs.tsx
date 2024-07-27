import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';

export default function Blogs() {
  return (
    <Box>
      <Typography variant="h2" sx={{ color: '#0E1527' }}>
        De nieuwste blogs
      </Typography>

      <CardGrid ids={['0', '1', '2']} />
    </Box>
  );
}
