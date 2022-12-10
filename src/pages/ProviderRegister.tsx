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
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckCircleIcon, UnlockIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
const ProviderRegister = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [permission, setPermission] = useState(0);
  const [projectName, setProjectName] = useState("");
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
          duration: 4000,
          position: "top",
        });
        return;
      }

      const request = await fetch(
        "http://localhost:5001/api/v1/auth/providerRegister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            username,
            password,
            email,
            phone,
            permission,
            projectName,
          }),
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
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing="1rem" width="20rem" rounded="xl" p="2" boxShadow={"lg"}>
        <Heading color={"#2C6B41"}>إنشاء حساب جديد </Heading>
        <Text>من هنا تبدأ</Text>
        <VStack align="left" spacing="1rem" width="100%" dir="rtl" p="1">
          <Box>
            <Text>
              <CheckCircleIcon w="6" h="4" mb="1.5" color="#85BD57" />
              الإسم الثلاثي
            </Text>
            <Input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
            />
          </Box>
          <Box>
            <Text>
              <CheckCircleIcon w="6" h="4" mb="1.5" color="#85BD57" />
              اسم المستخدم
            </Text>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
            />
          </Box>
          <Box>
            <Text>رقم الجوال</Text>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
            />
          </Box>
          <Box>
            <Text>البريد الإلكتروني</Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </Box>

          <Box>
            <Text>رقم التصريح</Text>

            <Input
              onChange={(e) => setPermission(e.target.valueAsNumber )}
              value={permission}
              type="number"
            />
          </Box>

          <Box>
            <Text>اسم المشروع</Text>
            <Input
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              type="text"
            />
          </Box>
          <Box>
            <Text>
              {" "}
              <UnlockIcon w="6" h="4" mb="2" color="#85BD57" />
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
              <UnlockIcon w="6" h="4" mb="2" color="#85BD57" />
              تأكيد كلمة المرور{" "}
            </Text>
            <Input
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              type="password"
            />
          </Box>
          <Button onClick={submitRegister} bg="#85BD57">
            إنشاء الحساب
          </Button>
        </VStack>
        <HStack>
          <Text>
            هل لديك حساب بالفعل ؟ <Link to="/login">تسجيل الدخول</Link>{" "}
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ProviderRegister;
