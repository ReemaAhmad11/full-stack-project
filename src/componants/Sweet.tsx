import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Stack,
  Image,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  HStack,
  Grid,
  Container,
  Button,
  Link,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Whatsapp from "./whatsapp";

const Menu = () => {
  const [item, setItem] = useState<string[]>([]);
  // const [filterItem, setFilterItem] = useState("");

  const { name } = useParams();

  const fetchItem = async () => {
    const request = await fetch("/api/v1/item/" + name, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();

    console.log(data);

    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  //   fetch('https://www.example.com/api/data')
  //   .then(response => response.json())
  //   .then(data => {
  //     // Filter the data to only include the specific information you want
  //     const filteredData = data.filter(item => item.type === "Sweets");
  //     // Use the filtered data as needed
  //   });

  return (
    <Box  h="90vh">
      <Grid
        dir="rtl"
        // mt="10"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        p="20"
        w="100%"
        h="100vh"
      >
        {item.map((item: any) => (
          <HStack key={item.id}>
            <Card maxW="sm" dir="rtl" boxShadow="2xl" m="5">
              <CardBody>
                <Box marginRight={50} maxW={{ base: "100%", sm: "60%" }}>
                  <Image
                    src={item.Image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Box>

                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.productName} </Heading>
                  <Text>{item.productType}</Text>

                  <Text>{item.productDescription}</Text>
                  <Text color="green.500" fontSize="2xl">
                    {item.productPrice} ريال
                  </Text>
                </Stack>
                <Divider />
                
                  <Whatsapp />
              
              </CardBody>
            </Card>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
