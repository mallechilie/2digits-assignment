import * as React from 'react';

import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TitleButton from '@/components/TitleButton';
import ContentWidth from '@/components/wrappers/ContentWidth';

const pages = ['Terms and conditions', 'Privacy statement'];

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ContentWidth>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <TitleButton />
            </Grid>

            <Grid item xs={6} md={4}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'white',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    width: 1,
                  }}>
                  {page}
                </Button>
              ))}
            </Grid>
          </Grid>
        </ContentWidth>
      </AppBar>
    </Box>
  );
}
