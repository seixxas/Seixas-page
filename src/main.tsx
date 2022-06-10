import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import GlobalStyles from "./styles/globalStyles";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <App />

      
    </ChakraProvider>
  </React.StrictMode>
);
