import { Container, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { TrDogBreedsFilter } from "../../../lib/components/dog-listing/TrDogBreedsFilter";
import TrFavoriteListing from "../../../lib/components/dog-listing/TrFavoriteListing";
import TrDogBreedsListing from "../../../lib/components/dog-listing/TrDogListing";

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
