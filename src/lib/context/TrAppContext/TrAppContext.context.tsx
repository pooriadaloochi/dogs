import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { createContext, useReducer } from "react";
import {
  ACTION_ENUM,
  TrThemeActionContextType,
  TrContextAppState,
} from "./TrAppContext.types.ts";
import { trAppReducer } from "./TrAppReducer.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

const INITIAL_STATE: TrContextAppState = {
  palletteMode: "dark",
  favDogs: [],
};

export const TrAppContext = createContext<TrContextAppState>(INITIAL_STATE);
export const TrAppActionContext = createContext<TrThemeActionContextType>(
  {} as TrThemeActionContextType
);

export const TrAppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(trAppReducer, { ...INITIAL_STATE });

  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: state.palletteMode,
    },
  });

  const actionsValue = useMemo(
    () => ({
      switchTheme() {
        dispatch({ type: ACTION_ENUM.TOGGLE_THEME });
      },
      addFavDog(dog: string) {
        dispatch({ type: ACTION_ENUM.ADD_FAV_DOG, payload: dog });
      },
      removeFavDog(dog: string) {
        dispatch({ type: ACTION_ENUM.REMOVE_FAV_DOG, payload: dog });
      },
      updateFavDogs(dogs: string[]) {
        dispatch({ type: ACTION_ENUM.UPDATE_FAV_DOGS, payload: dogs });
      },
      addOrRemoveFavDog(dog: string) {
        dispatch({ type: ACTION_ENUM.ADD_OR_REMOVE_FAV_DOG, payload: dog });
      },
    }),
    []
  );
  const queryClient = new QueryClient();

  return (
    <TrAppContext.Provider value={{ ...state }}>
      <TrAppActionContext.Provider value={actionsValue}>
        <ThemeProvider theme={theme}>
          <DndProvider backend={Backend}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </DndProvider>
        </ThemeProvider>
      </TrAppActionContext.Provider>
    </TrAppContext.Provider>
  );
};
