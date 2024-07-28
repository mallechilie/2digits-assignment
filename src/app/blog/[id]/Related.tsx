import * as React from 'react';

import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import ContentWidth from '@/components/wrappers/ContentWidth';
import WideBackground from '@/components/wrappers/WideBackground';

export default function Related() {
  return (
    <WideBackground>
      <ContentWidth>
        <Typography variant="h2" sx={{ color: '#0E1527' }}>
          Gerelateerde blogs
        </Typography>

        <CardGrid blogs={['0', '1', '2']} />
      </ContentWidth>
    </WideBackground>
  );
}
