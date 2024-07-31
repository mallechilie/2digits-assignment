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
        backgroundPosition: 'center',
        height: 600,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      style={{ filter: 'grayscale(100%)' }}>
      <Typography
        variant="h1"
        sx={{ color: 'white', width: 7 / 10, m: '32px', textTransform: 'uppercase' }}>
        {page.page_header.title}
      </Typography>

      <Typography variant="h5" sx={{ color: 'white', width: 6 / 10 }} component="div">
        {page.page_header.text}
      </Typography>
    </Box>
  );
}
