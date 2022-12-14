import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import ProtectedRoute from "./componants/ProtectedRoute";
import NavBar from "./componants/NavBar";
import Footer from "./componants/Footer";
import HomeCustomer from "./componants/HomeCustomer";

import ProviderRegister from "./pages/ProviderRegister";
import Welcome from "./componants/Welcome";
import Welcometow from './componants/Welcometow';
import Homepage from './componants/Homepage';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userRegister" element={<RegisterPage />} />
          <Route path="/providerRegister" element={<ProviderRegister />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcometow" element={<Welcometow />} />
          <Route element={<ProtectedRoute />}>
            <Route  path="/homepage" element={<Homepage/>}/>
            <Route path="/" element={<HomeCustomer />} />
          </Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
