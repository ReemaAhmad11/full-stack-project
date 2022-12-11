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
    <Avatar
      size={"xl"}
      src="https://attachment.outlook.live.net/owa/MSA%3Ashrouq.talhi%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1mNTc0LTc2Y2ItMDACLTAwCgBGAAADiYsnsgb6AE2Ew%2BqD5Qm7VgcAvc5aD50YekO9YDu7zsDfbwAAAgEMAAAAvc5aD50YekO9YDu7zsDfbwAFWfY6PQAAAAESABAAC2UATGpLU0CYSOdybKq3qA%3D%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6Ijg2NTYzMjk3YTJmZDRiZDY4ODgxMjM3MDdhM2U1OTQ1IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE4OTk5NDczMjU5NDU1NDdcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2YmZmZC1mNTc0LTc2Y2ItMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS00MTE4MDUwNTA3XCJ9IiwibmJmIjoxNjcwNjcxNTI5LCJleHAiOjE2NzA2NzIxMjksImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.asJDr4KyAUHzW7ncRkUkU6XBjyYC3QX4LKc--h9ailSfPukZYDylimJRkICFR7IVOLL1Wj3JNcqugJ8Iy2q2w83Chk--scxWFqeidPl4PJPMGNUa-CCH0coWw758muNGmG_Ubt6NiCU1tgVybVXUg4_KpciksRvnRERuCV7KPhANtaqlqElu0Dz4OW9rmby-gucWrBFOdkEUunqiQaY-7U1NBW46R7hRfRE-xYkutBeMrE0s95kJwsnss3UNB_YnEFSnEyJtDygwQu3ZG7Zlga_VaEp6qDjGKxU5aAhGmiWJYlPyRVVOf-JBFzD6FmspV-hXAKk9ThdfAmMUBk4XFA&X-OWA-CANARY=co6oj5vFckGN53kIYQQ5llADH4Wh2toYfXmztW6EPYVcz1Ndop88cDT5FRi-HNIu23rpsM6dHrM.&owa=outlook.live.com&scriptVer=20221202007.12&animation=true"
    ></Avatar>
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
