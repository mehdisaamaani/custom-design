import { TextField } from "@/shared/ui";

export const TextFields = () => {
  return (
    <>
      <TextField
        sx={{ mb: 4 }}
        size="sm"
        label="small size"
        error
        helperText="test"
      />
      <TextField sx={{ mb: 4 }} label="medium size" size="md" />
      <TextField size="lg" label="large size" />
    </>
  );
};
