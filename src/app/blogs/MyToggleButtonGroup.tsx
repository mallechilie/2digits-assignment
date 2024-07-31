import * as React from 'react';

import { Box, ToggleButton, type SxProps, type Theme } from '@mui/material';

export default function MyToggleButtonGroup(props: {
  sx?: SxProps<Theme>;
  value?: string;
  onChange: (value: string) => void;
  values: { value: string; label: string }[];
}) {
  const [currentValue, setValue] = React.useState<string>(
    props.value ?? props.values[0]?.value ?? '',
  );

  return (
    <Box>
      {props.values.map(({ value, label }) => (
        <ToggleButton
          key={value}
          value={value}
          selected={value === currentValue}
          onChange={() => {
            setValue(value);
            props.onChange(value);
          }}
          sx={props.sx}>
          {label}
        </ToggleButton>
      ))}
    </Box>
  );
}
