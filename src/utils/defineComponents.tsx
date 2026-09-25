import { Components } from "@mui/material";
import { Theme } from "@mui/system";

export const defineComponent = <T extends Components<Theme>>(c: T) => c;
