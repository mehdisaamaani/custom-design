import { Components, Theme, stepConnectorClasses, stepLabelClasses } from "@mui/material";

export const muiStepLabel = (theme: Theme): Components["MuiStepLabel"] => {
  return {
    styleOverrides: {
      root: {
        [`& .${stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1),
        },
        [`& .${stepLabelClasses.alternativeLabel} .${stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1),
        },
        [`& .${stepLabelClasses.completed} .${stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1),
        },
      },
    },
  };
};

export const muiStepper = (theme: Theme): Components["MuiStepper"] => {
  return {
    styleOverrides: {
      root: {
        [`& .${stepConnectorClasses.line}`]: {
          borderWidth: 1,
          borderColor: theme.palette.grey[200],
          borderStyle: "dashed",
        },
        [`& .${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.secondary[400],
          borderWidth: 1,
          borderStyle: "dashed",
        },
        [`& .${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.secondary[400],
          borderWidth: 1,
          borderStyle: "dashed",
        },
      },
    },
  };
};
