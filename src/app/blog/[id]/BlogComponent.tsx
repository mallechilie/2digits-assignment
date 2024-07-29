import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { Blog } from '@/Blog';
import Tag from '@/components/Tag';

export default function BlogComponent(props: { blog: Blog }) {
  return (
    <Box>
      {props.blog.categories.map((category) => (
        <Tag tagName={category.body ?? 'Empty'} key={category.body} />
      ))}

      <Typography variant="h3">{props.blog.title}</Typography>

      <Typography>{String(props.blog.content?.[0])}</Typography>
    </Box>
  );
}
