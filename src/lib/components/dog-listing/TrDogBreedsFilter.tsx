import { MenuItem, Stack, Autocomplete, TextField } from "@mui/material";
import { fetchDogsBreeds } from "../../api/fetchDogsBreeds";
import { useQuery } from "react-query";

interface TrDogBreedsFilterProps {
  selectedBreed: string;
  setSelectedBreed: (option: string) => void;
}

export function TrDogBreedsFilter({
  selectedBreed,
  setSelectedBreed,
}: TrDogBreedsFilterProps) {
  const { data: breeds } = useQuery("users", fetchDogsBreeds);

  return (
    <Stack spacing={5} width="100%">
      <Autocomplete
        value={selectedBreed}
        defaultValue={selectedBreed}
        sx={{ maxWidth: "50%" }}
        options={Object.keys(breeds?.message ?? [])}
        renderOption={(props, option) => (
          <MenuItem {...props}>{option}</MenuItem>
        )}
        renderInput={(params) => <TextField {...params} label="Breed" />}
        onChange={(_, value) => setSelectedBreed(value as string)}
      />
    </Stack>
  );
}
