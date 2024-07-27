import * as React from 'react';

import Box from '@mui/material/Box';

export default function ContentWidth({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box width={0.95} maxWidth={'1108px'} margin={'auto'}>
      {children}
    </Box>
  );
}
