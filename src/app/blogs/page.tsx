'use client';

import * as React from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import ContentWidth from '@/components/wrappers/ContentWidth';

export default function Page() {
  const [filter, setFilter] = React.useState<string | null>('All');

  const handleFilter = (_event: React.MouseEvent<HTMLElement>, newFilter: string | null) => {
    setFilter(newFilter);
  };

  return (
    <ContentWidth>
      <Typography variant="h2" sx={{ color: '#0E1527' }}>
        Topics
      </Typography>

      <ToggleButtonGroup value={filter} exclusive onChange={handleFilter}>
        <ToggleButton value="All">ALL BLOGS</ToggleButton>

        <ToggleButton value="Interview">INTERVIEW</ToggleButton>

        <ToggleButton value="Blog">BLOG</ToggleButton>

        <ToggleButton value="Whitepaper">WHITEPAPER</ToggleButton>
      </ToggleButtonGroup>

      <CardGrid ids={['0', '1', '2', '3', '4', '5', '6', '7', '8']} />
    </ContentWidth>
  );
}
