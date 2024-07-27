import * as React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Tag from '@/components/Tag';

export default function BlogCard() {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none', background: 'none' }}>
      <CardContent sx={{ px: 0 }}>
        <Box
          sx={{
            borderRadius: 1,
            aspectRatio: 350 / 240,
            width: '100%',
            backgroundImage: `url(https://picsum.photos/350/240)`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <Tag>TEKST-TYPE</Tag>
        </Box>

        <Typography variant="h4" component="div">
          Een interessante titel
        </Typography>

        <Typography variant="body1">
          Een samenvatting of introductie over lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam tempor eros sem, nec elementum mauris blandit nec.
        </Typography>

        <Button sx={{ pl: 0, color: 'black' }}>
          <Typography variant="body2">
            Lees meer <ArrowForwardIcon />
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
