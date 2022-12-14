import { Box, Flex, Avatar, Text, useColorModeValue } from "@chakra-ui/react";
const NavBar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "dark")} px={20}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="3xl">قُوتُ</Text>
        {/* <Text fontSize="lg"> منصة قُوتُ </Text> */}
        {/* <Text fontSize="lg"> الأطccباق</Text> */}

        <Avatar
          mb="4"
          size={"xl"}
          src={"https://l.top4top.io/p_2535tyot00.png"}
        />
      </Flex>
    </Box>


    
  );
};

export default NavBar;
