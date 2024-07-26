import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const pages = ['Terms and conditions', 'Privacy statement'];

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              2DIGITS
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 1, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
