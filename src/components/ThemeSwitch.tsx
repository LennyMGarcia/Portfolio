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
    backgroundSize: 'cover',
  },
  '& .Mui-checked .MuiSwitch-thumb': {
    backgroundSize: 'cover',
  },
}));

export default function ControlledSwitches() {
  const { themeMode, setThemeMode } = useThemeStore();
  const [checked, setChecked] = React.useState(themeMode === 'light');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    localStorage.setItem("isThemeChecked", String(event.target.checked));
    setChecked(isChecked);
    setThemeMode(isChecked ? 'light' : 'dark');
    window.location.reload();
  };

  return (
    <IconSwitch
      checked={localStorage.getItem("isThemeChecked") === "true" ? true : false}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      icon={<DarkModeIcon/>}
      checkedIcon={<LightModeIcon />}
    />
  );
}



