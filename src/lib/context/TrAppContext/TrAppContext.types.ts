export type TrContextAppState = {
  palletteMode: "dark" | "light";
  favDogs: string[];
};

export type TrThemeActionContextType = {
  switchTheme: () => void;
  addFavDog: (dog: string) => void;
  addOrRemoveFavDog: (dog: string) => void;
  removeFavDog: (dog: string) => void;
  updateFavDogs: (dog: string[]) => void;
};

export enum ACTION_ENUM {
  TOGGLE_THEME,
  ADD_FAV_DOG,
  ADD_OR_REMOVE_FAV_DOG,
  REMOVE_FAV_DOG,
  UPDATE_FAV_DOGS,
}

export type TrAppContextActionType =
  | { type: ACTION_ENUM.TOGGLE_THEME }
  | { type: ACTION_ENUM.ADD_FAV_DOG; payload: string }
  | { type: ACTION_ENUM.REMOVE_FAV_DOG; payload: string }
  | { type: ACTION_ENUM.UPDATE_FAV_DOGS; payload: string[] }
  | { type: ACTION_ENUM.ADD_OR_REMOVE_FAV_DOG; payload: string };
