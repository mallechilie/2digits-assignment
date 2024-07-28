import * as React from 'react';

import { Grid } from '@mui/material';

import type { Blog } from '@/Blog';
import BlogCard from '@/components/BlogCard';
import GridContainer from '@/components/wrappers/GridContainer';

const showCard = (blog: Blog) => (
  <Grid item xs={12} sm={6} md={4} key={blog._id}>
    <BlogCard blog={blog} />
  </Grid>
);
export default function CardGrid(props: { blogs: Blog[] }) {
  return <GridContainer>{props.blogs.map((blog) => showCard(blog))}</GridContainer>;
}
