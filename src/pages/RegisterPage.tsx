import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  useToast,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CheckCircleIcon,
  UnlockIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const toast = useToast();

  const submitRegister = async () => {
    try {
      if (password !== password2) {
        toast({
          title: `You passwords doesn't match`,
          status: "error",
          duration: 8000,
          position: "top",
        });
        return;
      }

      const request = await fetch(
        "http://localhost:5001/api/v1/auth/userRegister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, email, phone }),
        }
      );

      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 4000,
          position: "top",
        });
        return;
      }

      toast({
        title: data.message,
        status: "success",
        duration: 4000,
        position: "top",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Server Error !",
        status: "error",
        duration: 4000,
        position: "top",
      });
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="90vh">
      <VStack spacing="1rem" width="25rem" rounded="xl" p="7" boxShadow={"lg"}>
        <Heading color={"green.700"}>إنشاء حساب جديد </Heading>
        <Text>من هنا تبدأ</Text>
        <VStack align="left" spacing="1rem" width="100%" dir="rtl" p="1">
          <Box>
            <Text>
              <CheckCircleIcon w="6" h="4" mb="1.5" color="#079F4D" />
              اسم المستخدم
            </Text>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
            />
          </Box>
          <Box>
            <Text>
              <PhoneIcon w="6" h="4" mb="1.5" color="#079F4D" />
              رقم الجوال
            </Text>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
            />
          </Box>
          <Box>
            <Text>
              <EmailIcon w="6" h="4" mb="1.5" color="#079F4D" />
              البريد الإلكتروني
            </Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </Box>

          <Box>
            <Text>
              {" "}
              <UnlockIcon w="6" h="4" mb="2" color="#079F4D" />
              كلمة المرور{" "}
            </Text>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </Box>
          <Box>
            <Text>
              {" "}
              <UnlockIcon w="6" h="4" mb="2" color="#079F4D" />
              تأكيد كلمة المرور{" "}
            </Text>
            <Input
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              type="password"
            />
          </Box>
          <Button onClick={submitRegister} bg="#079F4D">
            إنشاء الحساب
          </Button>
        </VStack>
        <HStack>
          <Text>
            هل لديك حساب بالفعل ؟{" "}
            <Link color="#079F4D" href="/login">
              تسجيل الدخول
            </Link>
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};
