import {
  Flex,
  Heading,
  Text,
  VStack,
  useToast,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../componants/login/LoginForm";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const submitLogin = async () => {
    try {
      const request = await fetch("http://localhost:5001/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 201) {
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
    <Flex justifyContent="center" alignItems="center" height="80vh">
      <VStack spacing="1.5" width="20rem">
        <Heading color={"green.700"}>مرحباً</Heading>
        <Text>قم بتسجيل الدخول لتذوق شيئاً رائعاً</Text>
        <LoginForm
          username={username}
          setUsername={setUsername}
          setPassword={setPassword}
          password={password}
          submitLogin={submitLogin}
        />
        <HStack>
          <Text color={"black"}>
            إذا لم يكن لك حساب بالفعل{" "}
            <Link color="#079F4D" href="/userRegister">
              اضغط هنا
            </Link>{" "}
            للإنضمام لنا
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};
