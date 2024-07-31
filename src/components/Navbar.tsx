import * as React from 'react';

import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TitleButton from '@/components/TitleButton';
import ContentWidth from '@/components/wrappers/ContentWidth';

const pages = [
  { name: 'Home', page: '/' },
  { name: 'Blogs', page: '/blogs' },
];

export default function Navbar() {
  return (
    <Box sx={{ mb: '1px', height: '80px' }}>
      <AppBar
        sx={{ height: '100%' }}
        position="static"
        style={{ background: 'radial-gradient(circle, #020365 0%, #01041F 99.95%)' }}>
        <ContentWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TitleButton />

          <div style={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.page}
                sx={{ color: 'white', display: 'block', textTransform: 'none' }}>
                {page.name}
              </Button>
            ))}
          </div>
        </ContentWidth>
      </AppBar>
    </Box>
  );
}
