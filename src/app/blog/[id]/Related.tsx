import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import ContentWidth from '@/components/wrappers/ContentWidth';

export default function Related() {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#0E1527' }}>
        <ContentWidth>
          <Typography variant="h2" sx={{ color: '#0E1527' }}>
            Gerelateerde blogs
          </Typography>
          <CardGrid ids={['0', '1', '2']} />
        </ContentWidth>
      </Box>
    </Box>
  );
}
