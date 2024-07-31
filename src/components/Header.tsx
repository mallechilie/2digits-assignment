import * as React from 'react';

import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { Page } from '@/Page';
import { PreprSdk } from '@/server/prepr';

export default async function Header(props: { title: string; sx?: SxProps }) {
  const { Pages } = await PreprSdk.PageFromTitle({ where: { title: props.title } });

  const page = Pages?.items[0] as Page;

  return (
    <Box
      sx={{
        ...props.sx,
        backgroundImage: `url(${page.page_header.image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
