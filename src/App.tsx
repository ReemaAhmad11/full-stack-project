import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Payment from "./components/PaymetInformation";
import Prodect from './components/HomePageProvider'
import AddNewPost from "./components/AddPostToProvider";

export const App = () => (
  <ChakraProvider >
    <NavBar />

    <Prodect/>
    <Payment/>
    <Footer />

  
  </ChakraProvider>
);
