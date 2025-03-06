import { Container, Stack, Typography, useTheme } from "@mui/material";
import TrDogBreedsListing from "../../../lib/components/dog-breeds/TrDogListing";
import { TrDogBreedsFilter } from "../../../lib/components/dog-breeds/TrDogBreedsFilter";
import { useState } from "react";
import TrFavoriteListing from "../../../lib/components/dog-breeds/TrFavoriteListing";

export default function TrDogsListingPage() {
  const [selectedBreed, setSelectedBreed] = useState<string>("akita");

  const { text } = useTheme().palette;

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 5,
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={4}
        spacing={3}
        pb={2}
      >
        <Typography variant="h1">Dogs Breeds</Typography>

        <TrDogBreedsFilter
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
      </Stack>
      <Stack
        sx={{
          border: `1px solid ${text.primary}`,
          borderRadius: "5px",
          px: 5,
          py: 2,
        }}
      >
        <TrDogBreedsListing selectedBreed={selectedBreed} />
      </Stack>
      <Stack
        sx={{
          border: `1px solid ${text.primary}`,
          borderRadius: "5px",
          px: 5,
          py: 2,
          mt: 2,
        }}
      >
        <TrFavoriteListing />
      </Stack>
    </Container>
  );
}
