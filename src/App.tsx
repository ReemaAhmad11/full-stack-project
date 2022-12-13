import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import ProtectedRoute from "./componants/ProtectedRoute";
import Footer from "./componants/Footer";
import Nav from "./componants/NavBar";
import ProviderRegister from "./pages/ProviderRegister";
import HomeCustomer from "./componants/HomeCustomer";
import Menu from "./componants/Menu";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userRegister" element={<RegisterPage />} />
          <Route path="/providerRegister" element={<ProviderRegister />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomeCustomer />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
