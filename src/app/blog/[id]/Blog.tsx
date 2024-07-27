import * as React from 'react';

import Box from '@mui/material/Box';

import Tag from '@/components/Tag';

export default function Blog(props: { tag: string; content: string }) {
  return (
    <Box>
      <Tag tagName={props.tag} />
      {props.content}
    </Box>
  );
}
