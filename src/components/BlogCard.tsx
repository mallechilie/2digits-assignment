import * as React from 'react';

import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BlogCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 'md' }}>
      <CardContent>
        <Box
          sx={{
            aspectRatio: 350 / 240,
            width: '100%',
            backgroundImage: `url(https://picsum.photos/350/240)`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: 'whitesmoke',
              m: '5px',
              p: '3px',
            }}>
            <Typography>TEKST-TYPE</Typography>
          </Box>
        </Box>

        <Typography variant="h4" component="div">
          Een interessante titel
        </Typography>

        <Typography variant="body2">
          Een samenvatting of introductie over lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam tempor eros sem, nec elementum mauris blandit nec.
        </Typography>

        <Button size="small">Lees meer {'>'}</Button>
      </CardContent>
    </Card>
  );
}
