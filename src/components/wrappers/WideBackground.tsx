import * as React from 'react';

import type { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';

export default function WideBackground(props: { sx?: SxProps<Theme>; children: React.ReactNode }) {
  return <Box sx={{ ...props.sx, backgroundColor: '#8a8ea1' }}>{props.children}</Box>;
}
