import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import { PreprSdk } from '@/server/prepr';

export default async function Blogs() {
  const { Blogs } = await PreprSdk.NewBlogs({ limit: 3 });
  const _blogs = Blogs?.items;
  return _blogs ? (
    <Box>
      <Typography variant="h2" sx={{ color: '#0E1527' }}>
        De nieuwste blogs
      </Typography>

      <CardGrid blogs={_blogs} />
    </Box>
  ) : (
    <Typography variant="h2" sx={{ color: '#0E1527' }}>
      Geen nieuwe blogs...
    </Typography>
  );
}
