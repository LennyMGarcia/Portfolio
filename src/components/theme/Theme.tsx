"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, blueGrey, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    background: {
        ...(mode === 'light'
          ? {
            default: blueGrey[900],
            paper: blueGrey[800],
            }
          : {
            default: blueGrey[900],
            paper: blueGrey[800],
            }),
      },
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
      },
  },
});

const ThemeMode = createTheme(getDesignTokens('dark'));

export default ThemeMode;
