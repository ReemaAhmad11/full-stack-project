import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import ProtectedRoute from "./componants/ProtectedRoute";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userRegister" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />} ></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
