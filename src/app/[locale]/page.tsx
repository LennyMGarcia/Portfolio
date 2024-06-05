
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
import sqlLogo from "../../../public/sql-logo.png"
import branchImg from "../../../public/branch.png"
import edificio1 from "../../../public/edificio1.jpg"
import edificio2 from "../../../public/edificio2.webp"
import edificio3 from "../../../public/edificio3.jpg"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Typography from "@mui/material/Typography";

import { Paper, } from "@mui/material";
import React from "react";
import ExperiencesStepper, { ISteps } from "@/components/ExperiencesStepper";

const steps: ISteps[] = [
  {
    label: 'Desarrollador de React.js',
    date: "2024",
    subtitle: "Diseño y desarrollo de un sistema de registro, consulta, seguimiento y suscripción de casos médicos (Medilog)",
    description: `Se diseñó y desarrollo un sistema usando Typescript, React.js Node.js, Formik, Yup, Zod, Materia UI, Zustand
    ente otras tecnologías. Se creo una interfaz medica intuitiva, responsiva y fácil de usar`,
  },
  {
    label: 'Desarrollador de JavaScript',
    date: "2024",
    subtitle: "Construción de usa series de proyectos Vanilla JS",
    description: `Se creó una serie de proyectos VanillaJs en los que se encontrabam una pagina de menú de restaurante
    un juego de piedra papel o tijeras, un reloj de cuenta regresiva entre otros.`,
  },
  {
    label: 'Desarrollador de React',
    date: "2024",
    subtitle: "Alpaca Images Generator Website",
    description: `Se creó un un proyectos que permite crear y descargar imagenes de alpacas personalizables`,
  },
];


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
      width: "15rem",
      height: "15rem",
      display: "grid",
      gap: "0",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <img src={img} style={{ width: "7rem", height: "7rem" }}></img>
      <Typography sx={{ color: "#fff", textAlign: "center", marginTop: "-2rem" }} variant="subtitle2">{text}</Typography>
    </Paper>
  )
}


export default function Home() {
  const t = useTranslations("Home");

  // Extract the navigation object keys from the translations
  //const navigationKeys = Object.keys(t.raw("navigation"));

  return (
    <>
      <Box sx={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden" }}>
        <Paper sx={{ height: "50vh", padding: "6rem", overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
              <Typography variant="h4" color="primary">Lenny Garcia</Typography>
              <Typography variant="h6" sx={{ paddingRight: " 5rem" }}>Desarrollador de React.js, Typescript y Next.js</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img src={branchImg.src} style={{ filter: "grayscale(100%)", marginTop: "-10rem" }}></img>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Sobre mi
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
              Soy un desarrollador de aplicaciones Web Junior, especializado en el desarrollo
              Frontend, con dominio en tecnologías como React.js, Javascript, Typescript y Material UI.
              He trabajado con varios proyectos académicos y personales, demostrando habilidades para el
              diseño y desarrollo de interfaces intuitivas, funcionales y responsivas. Motivado por aprender y
              crecer en un entorno profesional.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
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
            <SkillsBox img={sqlLogo.src} text="SQL" />
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Portafolio
          </Typography>

          <Box sx={{
            margin: "1rem",
            display: "flex",
            gap: "0",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <Box sx={{ borderRadius: "0.5rem",  margin: "2rem" }}>
              <img src={edificio1.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem",  margin: "2rem" }}>
              <img src={edificio2.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem",  margin: "2rem" }}>
              <img src={edificio3.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>


          </Box>

        </Box>

        <Box sx={{ marginTop: "5rem" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem" }}>
            Experiencias
          </Typography>
          <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem 12vw" }}>
            <ExperiencesStepper steps={steps} />
          </Paper>
        </Box>


        <Box>

        </Box>
      </Box>

    </>
  );
}