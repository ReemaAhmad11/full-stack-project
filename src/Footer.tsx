import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Avatar,
    Input,
    IconButton,
  } from "@chakra-ui/react";
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import { ReactNode } from "react";
  import { BiMailSend } from "react-icons/bi";
  
  const Logo = () => {
    return (
      <Avatar size={"xl"} src="https://l.top4top.io/p_2535tyot00.png"></Avatar>
    );
  };
  
  const Email = () => {
    return (
      <>
        <Stack align={"flex-start"}>
          <Box>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} mr={4}>
              للتواصل:
            </Text>
            <Stack direction={"row"}>
              <Input
                placeholder={"البريد الإلكتروني:"}
                bg={useColorModeValue("gray.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("#079F4D", "whiteAlpha.800")}
                color={useColorModeValue("black", "whiteAlpha.800")}
                _hover={{
                  bg: "green.400",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Box>
        </Stack>
      </>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box dir="rtl" bg={useColorModeValue("gray.50", "white.900")}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Logo />
          <Email />
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }