import { priceSeparator } from "@/utils";
import { ExtendedTypographyProps, Typography } from "../typography";

type Props = ExtendedTypographyProps & {
  value?: number | string;
  withRial?: boolean;
  showZero?: boolean;
};

export const PriceView = ({
  value,
  withRial,
  showZero = false,
  ...props
}: Props) => {
  return (
    <Typography display="flex" gap={0.5} dir="ltr" {...props}>
      {withRial ? (
        <Typography dir="ltr" variant="sm">
          ریال
        </Typography>
      ) : null}
      {priceSeparator({ value, withRial: false, showZero })}
    </Typography>
  );
};
