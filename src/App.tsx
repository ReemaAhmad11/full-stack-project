import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Welcompage from "./Welcompage"
import Welcome from "./Welcome"
import{Routes,Route, BrowserRouter } from "react-router-dom"
import "./App.css"
export const App = () => (
  <ChakraProvider>
     <BrowserRouter>
    <Routes>
      <Route path="/"element={<Welcompage/>}/> 
      <Route path="/Welcome"element={<Welcome/>}/> 

  </Routes>
  </BrowserRouter>

  </ChakraProvider>
)
