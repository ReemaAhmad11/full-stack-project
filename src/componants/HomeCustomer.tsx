import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

export default function Homeustomer() {
  // const navigate = useNavigate();

  return (
    <Grid
      dir="rtl"
      // mt="10"
      templateColumns="repeat(3, 1fr)"
      gap={6}
      p="10"
      templateRows="repeat(2, 1fr)"
      bg="gray.100"
    >
      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="3xlcc"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={5}
          >
            <Heading fontSize={"sm"} fontFamily={"body"}>
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/Appetizer"> قسم المُقبلات</Link>
              </Button>
            </Heading>
            <Stack
              width="100%"
              mt="2rem"
              direction="row"
              padding="2"
              justifyContent="space-between"
              alignItems="center"
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="3xlcc"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://i.pinimg.com/564x/18/1a/35/181a350c64dffdf14a332901f8343c31.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={5}
          >
            <Heading fontSize={"sm"} fontFamily={"body"}>
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/MainDishe">قسم الأطباق الرئيسية</Link>
              </Button>
            </Heading>
            <Stack
              width="100%"
              mt="2rem"
              direction="row"
              padding="2"
              justifyContent="space-between"
              alignItems="center"
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="3xlcc"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={"https://l.top4top.io/p_2536yfu220.jpeg"}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={5}
          >
            <Heading fontSize={"sm"} fontFamily={"body"}>
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/Traditional"> قسم الشعبيات</Link>
              </Button>
            </Heading>
            <Stack
              width="100%"
              mt="2rem"
              direction="row"
              padding="2"
              justifyContent="space-between"
              alignItems="center"
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="3xlcc"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://i.pinimg.com/564x/66/0c/b8/660cb8ce9b85bf7faa1dea5e62a63fc2.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={5}
          >
            <Heading fontSize={"sm"} fontFamily={"body"}>
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/Sweet">قسم الحلويات</Link>
              </Button>
            </Heading>

            <Stack
              width="100%"
              mt="2rem"
              direction="row"
              padding="2"
              justifyContent="space-between"
              alignItems="center"
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://i.pinimg.com/564x/f0/f6/7a/f0f67a3cdecb11b072f81c15305a849c.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="1"
            pt="5"
          >
            <Heading fontSize="sm" fontFamily="body">
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/Healthy">قسم الأطباق الصحية</Link>
              </Button>
            </Heading>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          height="50vh"
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          padding={5}
        >
          <Flex flex={1}>
            <Image
              borderRadius="15"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://i.pinimg.com/564x/1a/33/ab/1a33ab226260f80bf8415f62ee71c817.jpg"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="1"
            pt="5"
          >
            <Heading fontSize="sm" fontFamily="body">
              <Button
                flex={1}
                fontSize="xl"
                rounded="full"
                fontFamily="scheherazade"
              >
                <Link to="/items/Drink">قسم المشروبات</Link>
              </Button>
            </Heading>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            ></Stack>
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
}
