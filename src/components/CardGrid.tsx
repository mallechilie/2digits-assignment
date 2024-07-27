import * as React from 'react';

import { Grid } from '@mui/material';

import BlogCard from '@/components/BlogCard';
import GridContainer from '@/components/wrappers/GridContainer';

const showCard = () => (
  <Grid item xs={12} sm={6} md={4}>
    <BlogCard />
  </Grid>
);
export default function CardGrid(props: { cards: unknown[] }) {
  return <GridContainer>{props.cards.map(() => showCard())}</GridContainer>;
}
