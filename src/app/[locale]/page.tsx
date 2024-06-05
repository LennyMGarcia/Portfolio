
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";
import ubuntu from "../../../public/ubuntu-logo.png"
import assemblyLogo from "../../../public/assembly-logo.png"
import cSharpLogo from "../../../public/c-sharp-logo.png"
import jsLogo from "../../../public/js-logo.png"
import tsLogo from "../../../public/ts-logo.png"
import dockerLogo from "../../../public/docker-logo.png"
import nodeLogo from "../../../public/node-logo.svg"
import reactLogo from "../../../public/react-logo.png"
import nextLogo from "../../../public/next-logo.svg"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Paper, StepContent, StepIconProps, StepLabel, styled } from "@mui/material";
import React from "react";
import ExperiencesStepper from "@/components/ExperiencesStepper";


function SkillsBox({
  img,
  text
}: {
  img: string,
  text: string,
}
) {
  return (
    <Paper sx={{ 
      borderRadius: "0.5rem", 
      margin: "2rem", 
      width:"15rem", 
      height:"15rem",
      display:"grid",
      gap:"0",
      justifyContent:"center",
      alignItems:"center"
       }}>
      <img src={img} style={{ width: "7rem", height: "7rem" }}></img>
      <Typography sx={{ color: "#fff", textAlign: "center", marginTop:"-2rem" }} variant="subtitle2">{text}</Typography>
    </Paper>
  )
}



export default function Home() {
  const t = useTranslations("Home");

  // Extract the navigation object keys from the translations
  //const navigationKeys = Object.keys(t.raw("navigation"));

  return (
    <>
      <Box sx={{ width: "100vw", maxWidth: "100vw", overflowX:"hidden" }}>
        <Box>
          <Grid container>
            <Grid item md={5}>

            </Grid>
            <Grid item md={7}>

            </Grid>
          </Grid>
        </Box>

        <Box sx={{padding:"0 6rem 5rem 6rem"}}>
          <Typography variant="h4" sx={{fontWeight:"bold"}}>
            Sobre mi
          </Typography>
          <Box sx={{ display: "flex",  }}>
            <HorizontalRuleIcon sx={{ fontSize:"2rem", transform:"scale(1.7, 1)" ,marginTop:"-0.5rem"}} color="primary" />
            <Typography variant="subtitle1" sx={{paddingLeft:"1rem"}}>
              Soy un desarrollador de aplicaciones Web Junior, especializado en el desarrollo
              Frontend, con dominio en tecnologías como React.js, Javascript, Typescript y Material UI. 
              He trabajado con varios proyectos académicos y personales, demostrando habilidades para el
              diseño y desarrollo de interfaces intuitivas, funcionales y responsivas. Motivado por aprender y
              crecer en un entorno profesional.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight:"bold" }}>
            Mis Habilidades
          </Typography>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <SkillsBox img={ubuntu.src} text="Ubuntu" />
            <SkillsBox img={cSharpLogo.src} text="C#" />
            <SkillsBox img={jsLogo.src} text="JavaScript" />
            <SkillsBox img={tsLogo.src} text="TypeScript" />
            <SkillsBox img={nodeLogo.src} text="Node.js" />
            <SkillsBox img={reactLogo.src} text="React.js" />
            <SkillsBox img={assemblyLogo.src} text="Assembly x86-64" />
            <SkillsBox img={dockerLogo.src} text="Docker" />
            <SkillsBox img={nextLogo.src} text="Next.js" />
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight:"bold" }}>
            Portafolio
          </Typography>

          <Box sx={{ display: "grid", gap: "0.5rem", gridTemplateColumns: "repeat(3, 1fr)" }}>

            <Box sx={{ borderRadius: "0.5rem", backgroundColor: "#000", margin: "2rem" }}>
              <img src={ubuntu.src} style={{ width: "10rem", height: "10rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem", backgroundColor: "#000", margin: "2rem" }}>
              <img src={ubuntu.src} style={{ width: "10rem", height: "10rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem", backgroundColor: "#000", margin: "2rem" }}>
              <img src={ubuntu.src} style={{ width: "10rem", height: "10rem" }}></img>
            </Box>


          </Box>

        </Box>

        <Box>
          <Typography>
            Portfolio
          </Typography>
          <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem 10rem" }}>
            <ExperiencesStepper />
          </Paper>
        </Box>


        <Box>

        </Box>
      </Box>

    </>
  );
}

/*
[====]O texto
      |
      |
[====]O texto


*/