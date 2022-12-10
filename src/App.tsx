import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

export const App = () => (
  <ChakraProvider>
    <NavBar />
    <Login />
    <Footer />
  </ChakraProvider>
);
