import { TrHeader } from "./TrHeader.tsx";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export function TrLayout() {
  return (
    <Stack direction="column" spacing={0}>
      <TrHeader />
      <Box
        component="main"
        sx={{ width: "100%", height: "100vh", overflow: "scroll" }}
      >
        <Outlet />
      </Box>
      {/* Add Footer Here */}
    </Stack>
  );
}
