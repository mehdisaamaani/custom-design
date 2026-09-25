import { Box } from "../box";
import { Stack } from "../stack";

export const DotProgress = () => {
  return (
    <Stack direction="row-reverse" spacing={1}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${0 * 0.2}s`,
        }}
      />
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${1 * 0.2}s`,
        }}
      />
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${2 * 0.2}s`,
        }}
      />
    </Stack>
  );
};
