import React from "react";
import Contenu from "../lang/Components/Contenu/Contenu";
import ToggleLangs from "../lang/Components/ToggleLangs/ToggleLangs";
import ContextProvider from "../theme/context/langContext";



function App() {
  return (
    <ContextProvider>
    <Contenu />
    <ToggleLangs />      
    </ContextProvider>
  );
}

export default App;