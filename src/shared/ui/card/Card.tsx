import {
  CardContentTypeMap,
  CardTypeMap,
  Card as MuiCard,
  CardContent as MuiCardContent,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const Card: OverridableComponent<CardTypeMap> = MuiCard;

export const CardContent: OverridableComponent<CardContentTypeMap> =
  MuiCardContent;
