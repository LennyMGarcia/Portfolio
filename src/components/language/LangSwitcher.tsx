"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import gbFlag from "../../../public/assembly-logo.png";
import geFlag from "../../../public/assembly-logo.png";
import esFlag from "../../../public/assembly-logo.png";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import TranslateIcon from '@mui/icons-material/Translate';

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }

  const router = useRouter();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const options: Option[] = [
    { country: "English", code: "en", flag: gbFlag },
    { country: "Spanish", code: "es", flag: esFlag },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: Option) => {
    setAnchorEl(null);
    router.push(`/${option.code}`);
  };

  return (
    <Box display="flex" >
      <Box position="relative">
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
        >
          <TranslateIcon/>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(option)}
              selected={pathname === `/${option.code}`}
            >
              <ListItemIcon>
                <Image src={option.flag} width={20} height={20} alt={`${option.country} flag`} />
              </ListItemIcon>
              <ListItemText primary={option.country} />
              {pathname === `/${option.code}` && (
                <ListItemIcon>
                  <CheckIcon color="success" />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default LangSwitcher;
