import {
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  StepperProps,
} from "@mui/material";
import { ElementType, JSX } from "react";
import { Typography } from "../typography";

type Props = {
  steps: string[];
  activeStep: number;
  DynamicStepIcon?: ElementType<StepIconProps, keyof JSX.IntrinsicElements>;
  props?: StepperProps;
  activeColor?: string;
};

export const StepperContainer = ({
  steps,
  activeStep,
  DynamicStepIcon,
  activeColor = "secondary.500",
  props,
}: Props) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      sx={{ width: 1 }}
      {...props}
    >
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel slots={{ stepIcon: DynamicStepIcon }}>
            <Typography
              variant="xs"
              fontWeight="medium"
              color={
                activeStep > index || activeStep === index
                  ? activeColor
                  : "grey.200"
              }
            >
              {label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
