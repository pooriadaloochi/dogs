import {
  ACTION_ENUM,
  TrAppContextActionType,
  TrContextAppState,
} from "./TrAppContext.types";

export const trAppReducer = (
  state: TrContextAppState,
  action: TrAppContextActionType
): TrContextAppState => {
  switch (action.type) {
    case ACTION_ENUM.TOGGLE_THEME:
      return {
        ...state,
        palletteMode: state.palletteMode === "dark" ? "light" : "dark",
      };
    case ACTION_ENUM.ADD_FAV_DOG:
      if (state.favDogs.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        favDogs: [...state.favDogs, action.payload],
      };
    case ACTION_ENUM.ADD_OR_REMOVE_FAV_DOG:
      if (state.favDogs.includes(action.payload)) {
        return {
          ...state,
          favDogs: state.favDogs.filter((dog) => dog !== action.payload),
        };
      }
      return {
        ...state,
        favDogs: [...state.favDogs, action.payload],
      };
    case ACTION_ENUM.REMOVE_FAV_DOG:
      return {
        ...state,
        favDogs: state.favDogs.filter((dog) => dog !== action.payload),
      };
    case ACTION_ENUM.UPDATE_FAV_DOGS:
      return {
        ...state,
        favDogs: action.payload,
      };

    default:
      return state;
  }
};
