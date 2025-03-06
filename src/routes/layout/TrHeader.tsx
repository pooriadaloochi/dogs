import { Button, Stack } from "@mui/material";
import { Bedtime, WbSunny } from "@mui/icons-material";
import { useAppReducer, useTrAppState } from "../../lib/context/TrAppContext";

export function TrHeader() {
  const { palletteMode } = useTrAppState();
  const { switchTheme } = useAppReducer();

  return (
    <Stack direction="row" justifyContent="center" spacing={4}>
      <Button onClick={switchTheme}>
        {palletteMode === "dark" ? <WbSunny /> : <Bedtime />}
      </Button>
    </Stack>
  );
};

