import { Button } from "../button";
import { Grid } from "../grid";
import { Stack } from "../stack";
type ButtonTabProps = {
  list: { label: string; value: string }[];
  value: string;
  onChange: (payload: string) => void;
};

export const ButtonTab = ({ list, value, onChange }: ButtonTabProps) => {
  return (
    <Grid size={{ lg: 12, xs: 12 }} sx={{ bgcolor: "background.tertiary", padding: "8px", borderRadius: 3 }}>
      <Stack direction="row" justifyContent="space-between">
        {list?.map((item) => (
          <Button
            key={item.label}
            sx={{
              bgcolor: value === item.value ? "#F05069" : "transparent",
              color: value === item.value ? "#fff" : "#444",
              minWidth: "90px",
            }}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Grid>
  );
};
