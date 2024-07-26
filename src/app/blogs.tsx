import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BlogCard from '@/components/BlogCard';

export default function Blogs() {
  return (
    <Box sx={{}}>
      <Typography variant="h2" sx={{ color: '#0E1527', width: 5 / 10 }}>
        De nieuwste blogs
      </Typography>

      <BlogCard />
    </Box>
  );
}
