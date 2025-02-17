import * as React from 'react';

import { Grid } from '@mui/material';

export default function GridContainer(props: { children: React.ReactNode }) {
  return (
    <Grid container spacing={4}>
      {props.children}
    </Grid>
  );
}
