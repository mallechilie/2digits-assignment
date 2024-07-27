import * as React from 'react';

import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TitleButton from '@/components/TitleButton';
import ContentWidth from '@/components/wrappers/ContentWidth';

const pages = [
  { name: 'Home', page: '/' },
  { name: 'Blogs', page: 'blogs' },
];

export default function Navbar() {
  return (
    <Box sx={{ mb: '1px' }}>
      <AppBar position="static">
        <ContentWidth
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <TitleButton />

          <div style={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.page}
                sx={{ color: 'white', display: 'block' }}>
                {page.name}
              </Button>
            ))}
          </div>
        </ContentWidth>
      </AppBar>
    </Box>
  );
}
