import * as React from 'react';

import { Grid } from '@mui/material';

import BlogCard from '@/components/BlogCard';
import GridContainer from '@/components/wrappers/GridContainer';

const showCard = (id: string) => (
  <Grid item xs={12} sm={6} md={4}>
    <BlogCard id={id} />
  </Grid>
);
export default function CardGrid(props: { ids: string[] }) {
  return <GridContainer>{props.ids.map((id) => showCard(id))}</GridContainer>;
}
