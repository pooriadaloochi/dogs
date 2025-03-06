import { useRoutes } from "react-router-dom";

import { ROUTES } from "./routes/routes";
import { TrAppContextProvider } from "./lib/context/TrAppContext/TrAppContext.context";

function App() {
  const routes = useRoutes(ROUTES);

  return <TrAppContextProvider>{routes}</TrAppContextProvider>;
}

export default App;
