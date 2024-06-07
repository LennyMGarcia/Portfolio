'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LangSwitcher from './language/LangSwitcher';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import useThemeStore from '@/stores/ThemeStore';
import ThemeModeSwitch from './ThemeSwitch';
import { useTheme } from '@mui/material/styles';


interface Props {
  window?: () => Window;
}


const drawerWidth = 240;


export default function DrawerAppBar({navItems}:{navItems:string[]}, props: Props, ) {
  const { window, } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link:string) => {
    router.push(`${pathname}#${link}`);
  };

  const handleChangeTheme = () => {
      
  }

  const drawer = (
    <Box component={"header"} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} >
              <Button type='button' onClick={() => handleLinkClick(item)}>{item}</Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component={"header"} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" elevation={1} sx={{ backgroundColor: theme.palette.background.paper }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: { sm: 1, md: 0 }, display: { xs: 'none', sm: 'block' } }}
          >
            <ImportantDevicesIcon color='primary' sx={{fontSize:"2rem"}}/>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button type="button" key={item} sx={{ color: '#fff' }} onClick={() => handleLinkClick(item)}> 
                {item}
              </Button>
            ))}
          </Box>
          <LangSwitcher />
          <ThemeModeSwitch/>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
