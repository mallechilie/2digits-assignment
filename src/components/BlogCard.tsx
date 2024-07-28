import * as React from 'react';

import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Blog } from '@/Blog';
import Tag from '@/components/Tag';

export default function BlogCard(props: { blog: Blog }) {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none', background: 'none' }}>
      <CardContent sx={{ px: 0 }}>
        <Box
          component={Link}
          href={`/blog/${props.blog._id}`}
          sx={{
            borderRadius: 1,
            aspectRatio: 350 / 240,
            width: '100%',
            backgroundImage: `url(${props.blog.banner_image.url})`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          {props.blog.categories.map((category) => (
            <Tag tagName={category.body ?? 'Empty'} />
          ))}
        </Box>

        <Typography variant="h4" component="div">
          {props.blog.title}
        </Typography>

        <Typography variant="body1">
          Een samenvatting of introductie over lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam tempor eros sem, nec elementum mauris blandit nec.
        </Typography>

        <Button sx={{ pl: 0, color: 'black' }} component={Link} href={`/blog/${props.blog._id}`}>
          <Typography variant="body2">
            Lees meer <ArrowForwardIcon />
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
