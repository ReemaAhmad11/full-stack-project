import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { UserRegisterPage } from "./pages/UserRegisterPage";
import ProtectedRoute from "./componants/ProtectedRoute";
import Footer from "./componants/Footer";
import Nav from "./componants/NavBar";
import ProviderRegister from "./pages/ProviderRegister";
import HomeCustomer from "./componants/HomeCustomer";
import Menu from "./componants/Menu";
import Sweet from "./componants/Sweet";
// import Paypal from "./componants/Paypal";

import HomePage from "./componants/HomePage";
import Profile from "./componants/Profile";
import Homepage2 from "./componants/Home2";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userRegister" element={<UserRegisterPage />} />
          <Route path="/providerRegister" element={<ProviderRegister />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Homepage2" element={<Homepage2 />} />
          <Route path="/menu" element={<Menu />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Homecustomer" element={<HomeCustomer />} />
            <Route path="/Homecustomer2" element={<HomeCustomer />} />
            <Route path="/items/:name" element={<Sweet />} />
            <Route path="/profile" element={<Profile />} />

            {/* <Route path="/payment" element={<Paypal />} /> */}
          </Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
