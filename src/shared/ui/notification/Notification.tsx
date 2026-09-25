import {
  CancelIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  WarningSolidIcon,
} from "@/icons";
import { SxProps } from "@mui/material";
import { ElementType, PropsWithChildren } from "react";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { Typography } from "../typography";

const NotificationColor = {
  default: {
    textColor: "background.400",
    backgroundColor: "grey.50",
  },
  success: {
    textColor: "success.600",
    backgroundColor: "success.50",
  },
  error: {
    textColor: "error.600",
    backgroundColor: "error.50",
  },
  warning: {
    textColor: "warning.700",
    backgroundColor: "warning.50",
  },
};
type NotificationVariant = keyof typeof NotificationColor;

interface PropsType extends PropsWithChildren {
  variant?: NotificationVariant;
  color?: NotificationVariant;
  title: string;
  header?: string;
  rounded?: boolean;
  sx?: SxProps;
}
const iconVariants: Record<NotificationVariant, { component: ElementType }> = {
  default: { component: InformationCircleIcon },
  success: { component: CheckCircleIcon },
  error: { component: CancelIcon },
  warning: { component: WarningSolidIcon },
};
export const Notification = ({
  variant = "default",
  color = "default",
  title,
  header,
  children,
  rounded = false,
  sx,
  ...props
}: PropsType) => {
  return (
    <Stack
      sx={{
        p: 2,
        width: "100%",
        borderRadius: rounded ? 4 : 1.5,
        color: NotificationColor[color].textColor,
        ...NotificationColor[color],
        ...sx,
      }}
      {...props}
    >
      <Stack alignItems="start" direction="row" gap={1}>
        <SvgIcon
          fontSize="medium"
          component={iconVariants[variant].component}
          color={color === "default" ? "inherit" : color}
        />
        <Stack gap={1}>
          {header && (
            <Typography variant="xs" color="error.800" fontWeight="xBold">
              {header}
            </Typography>
          )}
          <Typography variant="xs" fontWeight="medium">
            {title}
          </Typography>
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};
