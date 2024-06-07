
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
import { Paper, useTheme, } from "@mui/material";
import React from "react";
import ExperiencesStepper, { ISteps } from "@/components/ExperiencesStepper";
import SkillsBox from "@/components/SkillsBox";
import ContactMeBox from "@/components/ContactMeBox";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Home() {
  const t = useTranslations("Home");

  const steps: ISteps[] = [
    {
      label: t('steps.0.label'),
      date: t('steps.0.date'),
      subtitle: t('steps.0.subtitle'),
      description: t('steps.0.description')
    },
    {
      label: t('steps.1.label'),
      date: t('steps.1.date'),
      subtitle: t('steps.1.subtitle'),
      description: t('steps.1.description')
    },
    {
      label: t('steps.2.label'),
      date: t('steps.2.date'),
      subtitle: t('steps.2.subtitle'),
      description: t('steps.2.description')
    },
  ];

  return (
    <>
      <Box  component={"section"} id={t("navigation.home")} sx={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden",  }}>
        <Paper sx={{ height: "50vh", padding: "6rem", overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: "-2rem" }}>
              <Typography variant="h4" color="primary">Lenny Garcia</Typography>
              <Typography variant="h6" sx={{ paddingRight: " 5rem" }}>{t("intro")}</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img src={branchImg.src} style={{ filter: "grayscale(100%)", marginTop: "-10rem" }}></img>
            </Grid>
          </Grid>
        </Paper>

        <Box component={"section"} id={t("navigation.about")} sx={{ padding: "5rem 6vw" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {t("about")}
          </Typography>
          <Box sx={{ display: "flex", }}>
            <HorizontalRuleIcon sx={{ fontSize: "2rem", transform: "scale(1.7, 1)", marginTop: "-0.5rem" }} color="primary" />
            <Typography variant="subtitle1" sx={{ paddingLeft: "1rem" }}>
              {t("AboutDescription")}
            </Typography>
          </Box>
        </Box>

        <Box component={"section"} id={t("navigation.skills")} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            {t("skills")}
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

        <Box component={"section"} id={t("navigation.portfolio")}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            {t("Portfolio")}
          </Typography>

          <Box sx={{
            margin: "1rem",
            display: "flex",
            gap: "0",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img src={edificio1.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img src={edificio2.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>
            <Box sx={{ borderRadius: "0.5rem", margin: "2rem" }}>
              <img src={edificio3.src} style={{ width: "20rem", height: "20rem" }}></img>
            </Box>


          </Box>

        </Box>

        <Box component={"section"} id={t("navigation.experiences")} sx={{ marginTop: "5rem", }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", margin: "-1.5rem 2rem", }}>
            {t("Experiences")}
          </Typography>
          <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5rem 12vw", paddingBottom:"10rem" }}>
            <ExperiencesStepper steps={steps} />
          </Paper>
        </Box>

        <Box component={"section"} id={t("navigation.contact")} sx={{ width: "100vw", }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginTop:"-1rem" }}>
            {t("contact")}
          </Typography>

          <Box sx={{
            marginTop:"-1.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: 'relative',
            padding: '0 1rem',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
          }}/>

          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"2rem"
          }}>
            <ContactMeBox icon={<EmailIcon/>} text="Lennymgr27@gmail.com"/>
            <ContactMeBox icon={<LocalPhoneIcon/>} text="+1 (829)-657-2014"/>
            <ContactMeBox icon={<LocationOnIcon/>} text="Santo Domingo Este, RD."/>
          </Box>

          <Box sx={{
            marginTop:"1.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: 'relative',
            padding: '0 1rem',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: 'calc(50% - 10rem)',
              height: '0.3rem',
              backgroundColor: '#ffd54f',
            },
          }}/>
        </Box>

      </Box>

    </>
  );
}