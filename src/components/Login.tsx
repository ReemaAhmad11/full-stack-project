import {
  Box,
  VStack,
  Text,
  Input,
  Button,

} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box w="100%" h="70vh">
      <VStack align="center" spacing="1rem" width="100%" mt="75">
        <Box>
          <Text>Username</Text>
          <Input type="text" />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input type="password" />
        </Box>
        <Button>Login !</Button>
      </VStack>
    </Box>
  );
};

export default Login;
