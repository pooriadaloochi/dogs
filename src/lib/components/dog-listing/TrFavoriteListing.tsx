import React from "react";
import { List, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import TrDogItem from "./TrDogItem";
import {
  useAppReducer,
  useTrAppState,
} from "../../context/TrAppContext/TrAppContext.hooks";

const ItemType = "IMAGE";

export default function TrFavoriteListing() {
  const { favDogs } = useTrAppState();
  const { removeFavDog, addOrRemoveFavDog } = useAppReducer();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: ({ url }: { url: string }) => {
      addOrRemoveFavDog(url);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleClick = (dog: string) => {
    removeFavDog(dog);
  };

  return (
    <List
      component="div"
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        height: "350px",
        overflowY: "scroll",
        opacity: isOver ? 0.2 : 1,
      }}
    >
      <Typography variant="h6" sx={{ width: "100%" }}>
        Favorite
      </Typography>
      {favDogs.length > 0 ? (
        favDogs.map((dog) => (
          <TrDogItem
            key={dog}
            dog={{
              url: dog,
              active: true,
            }}
            onClick={handleClick}
          />
        ))
      ) : (
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
          No favorite dogs
        </Typography>
      )}
    </List>
  );
}
