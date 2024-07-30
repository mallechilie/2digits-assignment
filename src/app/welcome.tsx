import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { Page } from '@/Page';
import { PreprSdk } from '@/server/prepr';

export default async function Welcome() {
  const { Pages } = await PreprSdk.PageFromTitle({ where: { title: 'Home' } });

  const page = Pages?.items[0] as Page;

  return (
    <Box
      sx={{
        backgroundImage: `url(${page.page_header.image.url})`,
        backgroundSize: 'cover',
        height: 600,
        textAlign: 'center',
          overflow: "hidden"
      }}>
      <Typography variant="h1" sx={{ color: 'white', width: 7 / 10, margin: 'auto' }}>
        {page.page_header.title}
      </Typography>

      <Typography
        variant="h4"
        sx={{ color: 'white', width: 8 / 10, margin: 'auto' }}
        component="div">
        {page.page_header.text}
      </Typography>
    </Box>
  );
}
