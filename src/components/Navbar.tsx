import * as React from 'react';

import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const pages = [
  { name: 'Home', page: '/' },
  { name: 'Blogs', page: 'blogs' },
];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: '1px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">2DIGITS</Link>
          </Typography>

          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button key={page.name} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link href={page.page}>{page.name}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
