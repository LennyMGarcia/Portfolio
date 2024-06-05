import * as React from 'react';
import Switch from '@mui/material/Switch';
import useThemeStore from '@/stores/ThemeStore';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/material/styles';

const IconSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: theme.palette.primary.main,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    backgroundImage: `url(${LightModeIcon})`,
    backgroundSize: 'cover',
  },
  '& .Mui-checked .MuiSwitch-thumb': {
    backgroundImage: `url(${DarkModeIcon})`,
  },
}));

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const { setThemeMode } = useThemeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setThemeMode(isChecked ? 'dark' : 'light');
  };

  return (
    <IconSwitch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      icon={<DarkModeIcon/>}
      checkedIcon={<LightModeIcon />}
    />
  );
}


