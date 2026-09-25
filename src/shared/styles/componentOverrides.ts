// componentOverrides.ts
import { Components, Theme } from "@mui/material/styles";
import { defineComponent } from "@/utils/defineComponents";

import {
  MuiAppBar,
  MuiAvatar,
  MuiBackdrop,
  MuiButton,
  MuiCard,
  MuiCardContent,
  MuiCheckbox,
  MuiChip,
  MuiDialog,
  MuiDrawer,
  MuiFormControl,
  MuiFormControlLabel,
  MuiFormHelperText,
  MuiIconButton,
  MuiListItem,
  MuiListItemButton,
  MuiListItemText,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiPagination,
  MuiPaper,
  MuiSelect,
  MuiSkeleton,
  MuiSlider,
  muiStepLabel,
  muiStepper,
  MuiSvgIcon,
  MuiSwipeableDrawer,
  MuiTab,
  MuiTable,
  MuiTableHead,
  MuiTabs,
  MuiTextField,
  MuiToolbar,
} from "./components";

import { createUseMediaQuery } from "./hooks";
import { MuiCssBaseline } from "./system/baseline";

export const getComponentOverrides = (theme: Theme): Components<Theme> =>
  defineComponent({
    MuiCssBaseline: MuiCssBaseline(theme),
    MuiUseMediaQuery: createUseMediaQuery(theme),

    MuiAppBar: MuiAppBar(theme),
    MuiToolbar: MuiToolbar(),
    MuiPaper: MuiPaper(theme),
    MuiCard: MuiCard(theme),
    MuiCardContent: MuiCardContent(theme),
    MuiSkeleton: MuiSkeleton(theme),
    MuiPagination: MuiPagination(theme),

    MuiButton: MuiButton(theme),
    MuiIconButton: MuiIconButton(theme),

    MuiTable: MuiTable(),
    MuiTableHead: MuiTableHead(theme),

    MuiTabs: MuiTabs(theme),
    MuiTab: MuiTab(theme),

    MuiListItem: MuiListItem(theme),
    MuiListItemText: MuiListItemText(theme),
    MuiListItemButton: MuiListItemButton(theme),

    MuiMenu: MuiMenu(theme),
    MuiMenuItem: MuiMenuItem(theme),

    MuiTextField: MuiTextField(theme),
    MuiOutlinedInput: MuiOutlinedInput(theme),
    MuiFormHelperText: MuiFormHelperText(theme),
    MuiFormControl: MuiFormControl(theme),

    MuiBackdrop: MuiBackdrop(theme),
    MuiSwipeableDrawer: MuiSwipeableDrawer(theme),
    MuiDrawer: MuiDrawer(theme),

    MuiFormControlLabel: MuiFormControlLabel(theme),
    MuiSelect: MuiSelect(theme),
    MuiChip: MuiChip(theme),

    MuiStepper: muiStepper(theme),
    MuiStepLabel: muiStepLabel(theme),

    MuiSvgIcon: MuiSvgIcon(theme),
    MuiSlider: MuiSlider(theme),
    MuiAvatar: MuiAvatar(theme),
    MuiDialog: MuiDialog(theme),
    MuiCheckbox: MuiCheckbox(theme),

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          xxs: "p",
          xs: "p",
          sm: "p",
          base: "p",
          lg: "p",
          xl: "h6",
          "2xl": "h5",
          "3xl": "h4",
          "4xl": "h3",
          "5xl": "h2",
        },
      },
    },
  });
