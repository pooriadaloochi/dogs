import { List, Typography } from "@mui/material";
import { useQuery } from "react-query";
import TrDogItem from "./TrDogItem";
import {
  useAppReducer,
  useTrAppState,
} from "../../context/TrAppContext/TrAppContext.hooks";
import { fetchDogsByBreed } from "../../api/fetchDogsByBreed";

interface TrDogBreedsListingProps {
  selectedBreed: string;
}

export default function TrDogBreedsListing({
  selectedBreed,
}: TrDogBreedsListingProps) {
  const { favDogs } = useTrAppState();
  const { addOrRemoveFavDog } = useAppReducer();

  const { data: dogsRecords } = useQuery(["users", selectedBreed], () =>
    fetchDogsByBreed(selectedBreed)
  );

  const handleClick = (dog: string) => {
    addOrRemoveFavDog(dog);
  };


  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        height: "350px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h6" sx={{ width: "100%" }}>
        Search Results
      </Typography>
      {Array.isArray(dogsRecords) && dogsRecords.length > 0 ? (
        dogsRecords?.map((dog) => (
          <TrDogItem
            key={dog}
            dog={{
              url: dog,
              active: favDogs.includes(dog),
            }}
            onClick={handleClick}
          />
        ))
      ) : (
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
          No dogs found
        </Typography>
      )}
    </List>
  );
}
