import React from "react";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <p className="bg-sky-500">Hello world!</p>
    </AppContext>
  );
};

export default App;
