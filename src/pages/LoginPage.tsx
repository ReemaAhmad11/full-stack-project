import {
  Flex,
  Heading,
  Text,
  VStack,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../componants/login/LoginForm";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const submitLogin = async () => {
    try {
      const request = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      toast({
        title: "Server Error !",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing="1.5" width="20rem">
        <Heading color={"#2C6B41"} >حيّهم</Heading>
        <Text>قم بتسجيل الدخول لتذوق شيئاً رائعاً</Text>
        <LoginForm
          username={username}
          setUsername={setUsername}
          setPassword={setPassword}
          password={password}
          submitLogin={submitLogin}
        />
        <HStack>
          <Text color={"#2C6B41"} >
            {" "}
            إذا لم يكن لك حساب بالفعل <Link to="/register">اضغط هنا </Link>{" "}
            للإنضمام لنا
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};
