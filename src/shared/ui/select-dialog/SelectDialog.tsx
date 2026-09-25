import { SmallCheckIcon } from "@/icons";
import { Dialog, SearchField, Stack, SvgIcon } from "@/shared/ui";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  options: SelectOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  hasSearch?: boolean;
  setKeyword?: Dispatch<SetStateAction<string | number>>;
  keyword?: string | number;
};

export const SelectDialog = ({
  open,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
  searchPlaceholder = "جستجو",
  hasSearch,
  setKeyword,
  keyword,
}: SelectDialogProps) => {
  const handleSelect = (value: string) => {
    onSelect(value);
  };

  const list = [...options];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      title={title}
      sx={{ zIndex: 3001 }}
    >
      <Stack overflow="hidden">
        {hasSearch && (
          <SearchField
            onChange={(value) => setKeyword?.(value.toString())}
            value={keyword}
            placeholder={searchPlaceholder}
            sx={{ flex: 1 }}
          />
        )}
        <List sx={{ overflow: "auto" }} className="hide-scrollbar">
          {list.map(({ label, value }) => (
            <ListItem key={value} disablePadding disableGutters>
              <ListItemButton
                onClick={() => handleSelect(value)}
                disableGutters
                selected={selectedValue === value}
              >
                <ListItemText
                  primary={label}
                  sx={{
                    [`&.MuiListItemText-root .MuiListItemText-primary`]: {
                      fontWeight: selectedValue === value ? "xBold" : "regular",
                      color: selectedValue === value ? "text.primary" : "",
                    },
                  }}
                />
                {selectedValue === value ? (
                  <SvgIcon color="primary">
                    <SmallCheckIcon />
                  </SvgIcon>
                ) : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};
