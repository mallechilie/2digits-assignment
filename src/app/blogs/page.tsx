'use client'
import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export default function Page() {

    const [alignment, setAlignment] = React.useState<string | null>('All');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
    <Box>
      <Typography variant="h2" sx={{ color: '#0E1527' }}>
        Topics
      </Typography>


      <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          >
        <ToggleButton value="All">ALL BLOGS</ToggleButton>

        <ToggleButton value="Interview">INTERVIEW</ToggleButton>

        <ToggleButton value="Blog">BLOG</ToggleButton>

        <ToggleButton value="Whitepaper">WHITEPAPER</ToggleButton>
      </ToggleButtonGroup>

      <CardGrid cards={[0, 0, 0, 0, 0, 0, 0, 0, 0]} />
    </Box>
  );
}
