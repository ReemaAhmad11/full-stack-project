import { VStack, Input, Button, Text, Box } from '@chakra-ui/react';

import React from 'react';

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
    <VStack align='left' spacing='1rem' width='100%'>
      <Box>
        <Text>اسم المستخدم</Text>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type='text'
        />
      </Box>
      <Box>
        <Text>كلمة المرور</Text>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
        />
      </Box>
      <Button onClick={submitLogin}>دخول</Button>
    </VStack>
  );
};

export default LoginForm;

// import React from 'react'

// function RegisterForm() {
//   return (
//     <div>RegisterForm</div>
//   )
// }

// export default RegisterForm