"use client";
import { Paper, Typography, useTheme } from "@mui/material"

export default function ContactMeBox({
    icon,
    text
  }: {
    icon: React.ReactNode,
    text: string,
  }
  ) {
    const theme = useTheme()
    return (
      <Paper sx={{
        borderRadius: "0.5rem",
        margin: "2rem",
        width: "17rem",
        height: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover":{
          backgroundColor:theme.palette.action.hover
        }
      }}>
        <Typography sx={{ textAlign: "center", marginTop: "0.5rem",}}>{icon}</Typography>
        <Typography  sx={{ textAlign: "center",  paddingLeft:"0.5rem" }} variant="subtitle2">{text}</Typography>
      </Paper>
    )
  }