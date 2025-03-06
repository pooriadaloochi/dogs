import { Favorite } from "@mui/icons-material";
import { Box, ListItem } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";

type TrDogType = {
  url: string;
  active?: boolean;
};

interface TrDogItemProps {
  dog: TrDogType;
  onClick: (dog: string) => void;
}
const ItemType = "IMAGE";

export default function TrDogItem({ dog, onClick }: TrDogItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { url: dog.url },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <ListItem
      ref={drag as unknown as React.Ref<HTMLLIElement>}
      key={dog.url}
      sx={{
        cursor: "pointer",
        width: 210,
        height: 210,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "relative",
        p: 0.8,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img
        src={dog.url}
        alt={dog.url}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "6px",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 13,
          right: 13,
          p: 1,
          zIndex: 9,
          width: 35,
          height: 35,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.6s",
          backgroundColor: "gray",
          ":hover": {
            backgroundColor: "#aaa",
            svg: {
              color: "red",
            },
          },
        }}
        onClick={() => onClick(dog.url)}
      >
        <Favorite
          fontSize="small"
          sx={{ fontSize: 20, color: dog.active ? "red" : "white" }}
        />
      </Box>
    </ListItem>
  );
}
// import FavoriteIcon from '@mui/icons-material/Favorite';
