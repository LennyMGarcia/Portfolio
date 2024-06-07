"use client";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function Footer({message}:{message:string}) {
    const theme = useTheme()
    return (
      <Paper component={"footer"} sx={{
        width: "100vw",
        height: "20vh",
        display: "grid",
        gap: "0",
        justifyContent: "center",
        alignItems: "center",
      }}>
         <Typography sx={{ textAlign: "center",   fontFamily: "Cursive"}} color="primary" variant="h4">{message}</Typography>
        <Typography sx={{ textAlign: "center",  }} variant="caption">Copyright © 2024</Typography>
      </Paper>
    )
  }