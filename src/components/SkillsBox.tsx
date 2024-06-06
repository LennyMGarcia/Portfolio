"use client";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function SkillsBox({
    img,
    text
  }: {
    img: string,
    text: string,
  }
  ) {
    const theme = useTheme()
    return (
      <Paper sx={{
        borderRadius: "0.5rem",
        margin: "2rem",
        width: "15rem",
        height: "15rem",
        display: "grid",
        gap: "0",
        justifyContent: "center",
        alignItems: "center",
        "&:hover":{
          backgroundColor:theme.palette.action.hover
        }
      }}>
        <img src={img} style={{ width: "7rem", height: "7rem" }}></img>
        <Typography sx={{ textAlign: "center", marginTop: "-2rem" }} variant="subtitle2">{text}</Typography>
      </Paper>
    )
  }