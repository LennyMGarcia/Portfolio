"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {

    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {

    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.primary.main,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 15,
      height: 15,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      boxShadow: "5px 5px 10px 10px rgba(255, 202, 40, 0.12)",
    },

  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export interface ISteps {
  label: string,
  date: string ,
  subtitle: string,
  description: string,
}


export default function ExperiencesStepper({steps}:{steps:ISteps[]}) {
  const theme = useTheme()
  return (
    <Box sx={{}}>
      <Stepper orientation="vertical" connector={<QontoConnector />}>
        <>
            {Array.isArray(steps) ? (
                steps.map((step: ISteps) => (
                  <Step key={step.label} active={true}>
                    <Grid container alignItems="center">
                      <Grid item xs={12} sx={{ position: 'relative' }}>
                        <Box sx={{ position: 'absolute', left: '-11vh', top: '0.8rem', }}>
                          <Box sx={{
                           position: "relative",
                            width: "28px",
                            height: "20px",
                            borderTopLeftRadius:"50%",
                            borderBottomLeftRadius:"50%",
                            background: theme.palette.background.default,
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            "&::after": {
                              content: "''",
                              position: "absolute",
                              top: "0",
                              right: "-22px",  
                              width: "0",
                              height: "0",
                              borderTop: "10px solid transparent",
                              borderBottom: "10px solid transparent",
                              borderLeft: `22px solid ${theme.palette.background.default}`,  
                            },
                          }}>
                            <Typography variant="overline" sx={{padding:"0.2rem 0 0 0.9rem", zIndex:"2"}}>{step.date}</Typography>
                          </Box>
        
                        </Box>
                        <StepLabel StepIconComponent={QontoStepIcon} sx={{ paddingLeft: "0.3rem" }}>
                          <Typography variant="h6" sx={{fontWeight:"bold" }}>{step.label}</Typography>
                        </StepLabel>
                      </Grid>
                    </Grid>
                    <StepContent>
                      <Typography variant="subtitle1" sx={{fontWeight:"bold" }}>{step.subtitle}</Typography>
                      <Typography variant="body2">{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))
            ) : (<div>No hay elementos</div>)}

        </>
      </Stepper>
    </Box>
  );
}