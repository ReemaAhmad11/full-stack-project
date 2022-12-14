import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

function Homepage() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} dir="rtl">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.600",
                zIndex: -1,
              }}
            >
              قُوت
            </Text>
            <br />{" "}
            <Text color={"black.500"} as={"span"} fontSize="4xl">
              نوصلكم للقمة وكلنا ثقه فيكم
            </Text>{" "}
          </Heading>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"green.500"}
              color={"black"}
              _hover={{
                bg: "gray.100",
              }}
            >
              <Link color="black" textDecoration={"none"} href="/userRegister">
                إنشاء حساب
              </Link>
            </Button>
            <Button rounded={"full"} color="black">
              {" "}
              <Link color="black" textDecoration={"none"} href="/login">
                تسجيل دخول
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          ml="80"
          alt={"home Image"}
          objectFit={"cover"}
          borderRadius={"full"}
          src={"https://h.top4top.io/p_2539r1bct1.png"}
        />
      </Flex>
    </Stack>
  );
}
export default Homepage;
