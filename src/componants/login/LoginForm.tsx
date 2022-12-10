import { VStack, Input, Button, Text, Box,} from "@chakra-ui/react";
import { CheckCircleIcon, UnlockIcon } from "@chakra-ui/icons";
import React from "react";

interface ILoginForm {
  username: string;
  password: string;
  submitLogin: () => Promise<void>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({
  username,
  password,
  submitLogin,
  setUsername,
  setPassword,
}: ILoginForm) => {
  return (
    <VStack
      align="left"
      spacing="1rem"
      width="120%"
      dir="rtl"
      rounded={"xl"}
      boxShadow={"lg"}
      p="8"
    >
      <Box>
        <Text> <CheckCircleIcon  w='6' h='4' mb='1.5' color="#85BD57"/> اسم المستخدم </Text>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
        />
      </Box>
      <Box>
        <Text> <UnlockIcon w='6' h='4' mb='2' color="#85BD57" />كلمة المرور </Text>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
      </Box>

      <Button onClick={submitLogin} bg='#85BD57'>دخول</Button>
    </VStack>
  );
};

export default LoginForm;
