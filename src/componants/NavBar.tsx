import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Simple() {
  return (
    <Box dir="rtl">
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={20}>
        <Flex h="24" alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} mb="3">
            <Link href="/">
              <Avatar
                size={"xl"}
                src={"https://l.top4top.io/p_2535tyot00.png"}
              />
            </Link>
            <HStack
              mt="10"
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link fontWeight="medium" href="/" fontSize="xl">
                الصفحة الرئيسية
              </Link>

              <Link fontWeight="medium" href="/homeCustomer" fontSize="xl">
                قائمة الأطعمة
              </Link>
              <Link fontWeight="medium" href="/menu" fontSize="xl">
                قائمة الأُسر
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} mb="3">
            <Box fontSize="3xl">
              {" "}
              <Link href="/">قُوت </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
