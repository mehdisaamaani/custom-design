import { AvatarProps, Avatar as MuiAvatar } from "@mui/material";
import { StandardCSSProperties } from "@mui/system";
import { PropsWithChildren } from "react";

type Props = AvatarProps & {
  bgcolor?: StandardCSSProperties["backgroundColor"];
};

export const Avatar = ({
  children,
  bgcolor,
  src,
  ...props
}: PropsWithChildren<Props>) => {
  if (!children && !src) {
    return (
      <MuiAvatar sx={{ bgcolor }} {...props} src="/icons/icon-72x72.png" />
    );
  }
  return (
    <MuiAvatar sx={{ bgcolor }} {...props} src={src}>
      {children}
    </MuiAvatar>
  );
};
