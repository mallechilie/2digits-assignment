'use client';

import * as React from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';

export default function Page() {
  const [filter, setFilter] = React.useState<string | null>('All');

  const handleFilter = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setFilter(newAlignment);
  };

  return (
    <Box>
      <Typography variant="h2" sx={{ color: '#0E1527' }}>
        Topics
      </Typography>

      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}>
        <ToggleButton value="All">ALL BLOGS</ToggleButton>

        <ToggleButton value="Interview">INTERVIEW</ToggleButton>

        <ToggleButton value="Blog">BLOG</ToggleButton>

        <ToggleButton value="Whitepaper">WHITEPAPER</ToggleButton>
      </ToggleButtonGroup>

      <CardGrid cards={[0, 0, 0, 0, 0, 0, 0, 0, 0]} />
    </Box>
  );
}
