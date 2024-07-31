import * as React from 'react';

import { Divider, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import TitleButton from '@/components/TitleButton';
import ContentWidth from '@/components/wrappers/ContentWidth';
import GridContainer from '@/components/wrappers/GridContainer';

const pages = ['Terms and conditions', 'Privacy statement'];

export default function Footer() {
  return (
    <AppBar
      sx={{ position: 'static', top: 'auto', bottom: 0 }}
      style={{ background: 'radial-gradient(circle, #020365 0%, #01041F 99.95%)' }}>
      <ContentWidth>
        <GridContainer>
          <Grid item xs={6} md={4}>
            <TitleButton />
          </Grid>

          <Grid item xs={6} md={4} sx={{ display: 'flex' }}>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: 'white' }} />

            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    textTransform: 'none',
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
  );
}
