import * as React from 'react';

import { Grid } from '@mui/material';

import BlogCard from '@/components/BlogCard';
import GridContainer from '@/components/wrappers/GridContainer';
import type { PreprBlogsQuery_Blogs_Blogs_items_Blog } from '@/server/prepr/generated/preprAPI.schema';

const showCard = (blog: PreprBlogsQuery_Blogs_Blogs_items_Blog) => (
  <Grid item xs={12} sm={6} md={4} key={blog._id}>
    <BlogCard blog={blog} />
  </Grid>
);
export default function CardGrid(props: { blogs: PreprBlogsQuery_Blogs_Blogs_items_Blog[] }) {
  return <GridContainer>{props.blogs.map((id) => showCard(id))}</GridContainer>;
}
