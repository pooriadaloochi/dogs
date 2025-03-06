import { RouteObject } from "react-router-dom";
import { TrLayout } from "./layout/TrLayout";
import { PATHS } from "./paths";
import TrDogsListingPage from "./pages/TrDogBreeds/TrDogsListingPage";

export const ROUTES: RouteObject[] = [
  {
    path: PATHS.home(),
    element: <TrLayout />,
    children: [
      {
        index: true,
        element: <TrDogsListingPage />,
      },
    ],
  },
];
