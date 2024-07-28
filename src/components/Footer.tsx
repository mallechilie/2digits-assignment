import * as React from 'react';

import { Divider, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TitleButton from '@/components/TitleButton';
import ContentWidth from '@/components/wrappers/ContentWidth';
import GridContainer from '@/components/wrappers/GridContainer';

const pages = ['Terms and conditions', 'Privacy statement'];

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ContentWidth>
          <GridContainer>
            <Grid item xs={6} md={4}>
              <TitleButton />
            </Grid>

            <Grid item xs={6} md={4} sx={{ display: 'flex' }}>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ color: 'white' }} />

              <div>
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
              </div>
            </Grid>
          </GridContainer>
        </ContentWidth>
      </AppBar>
    </Box>
  );
}
