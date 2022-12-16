import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useToast,
  Modal,
  useDisclosure,
  Select,
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
  GridItem,
} from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
// import  Client  from "ftp";
//import * as zlib from "zlib";
//import * as fs from "fs";
//import * as path from "path";

const Menu = () => {
  const [item, setItem] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [filter, setFilter] = useState("Sweet");

  const toast = useToast();

  const fetchItem = async () => {
    const request = await fetch("/api/v1/item", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    setItem(data);
    //console.log(data);
  };

  const addNewItem = async () => {
    // if (image === "") {
    //   toast({
    //     title: " all fileds are required ",
    //     status: "error",
    //     duration: 3000,
    //     position: "top",
    //   });

    // return;
    // }
    if (!title && !description && !price && !type) {
      toast({
        title: " all fileds are required ",
        status: "error",
        duration: 3000,
        position: "top",
      });

      return;
    }

    try {
      const request = await fetch("/api/v1/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          productName: title,
          productDescription: description,
          productPrice: Number(price),
          productType: type,
          Image: image,
        }),
      });
      const data = await request.json();

      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      // setItem([...item, title, description, type, price, image]);
      fetchItem();
      setTitle("");
      setDescription("");
      setPrice("");
      onClose();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);

  const deleteItem = async (id: string) => {
    console.log(id);

    try {
      const request = await fetch(`/api/v1/item/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      fetchItem();
    } catch (error) {
      console.log(error);
      toast({
        title: "Server Error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{ height: "100vh" }}>
      <Box m="20" mb="1" alignItems="center" dir="rtl">
        <Button
          bgColor={"green.500"}
          colorScheme="white"
          aria-label="Add new Post "
          onClick={onOpen}
        >
          {" "}
          اضافة منتج {<IoIosAddCircle />}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <Box dir="rtl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader paddingRight={180}>اضف منتج </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel> اسم المنتج </FormLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                  />
                  <FormLabel> وصف المنتج </FormLabel>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                  />
                  <FormLabel> سعر المنتج </FormLabel>
                  <Input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                  />
                </FormControl>
                <Box paddingTop={7}>
                  <Select
                    w="30"
                    placeholder="اختر الصنف "
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <Button>x</Button>
                    <option value="MainDishe">اطباق رئسية</option>
                    <option value="Appetizer">مقبلات </option>
                    <option value="Sweet">حلويات</option>
                    <option value="Traditional">شعبيات</option>
                    <option value="Drink">مشروبات</option>
                  </Select>
                </Box>
                <Box paddingTop={"10"}>
                  <FormLabel> أختر</FormLabel>
                  <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={6}
                    p="10"
                    templateRows="repeat(1, 1fr)"
                  >
                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        borderRadius="20"
                        mr="0"
                        color={"white"}
                        value="Appetizer"
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/564x/87/e3/c9/87e3c910e90fbee4f5069dd69e28a442.jpg"
                          )
                        }
                      >
                        {" "}
                        مقبلات{" "}
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        mr="0"
                        borderRadius="20"
                        color={"white"}
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/474x/a1/c8/29/a1c8296178ae44dedee7202a55b4cc7d.jpg"
                          )
                        }
                        value="MainDishe"
                      >
                        {" "}
                        الأطباق الرئيسية{" "}
                      </Button>
                    </GridItem>

                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        borderRadius="20"
                        mr="0"
                        color={"white"}
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/564x/46/f4/c8/46f4c8ecd6fa719f10664dd5b958083a.jpg"
                          )
                        }
                        value="Traditional"
                      >
                        {" "}
                        شعبيات{" "}
                      </Button>
                    </GridItem>

                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        borderRadius="20"
                        color={"white"}
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/564x/33/87/60/3387607cf1898e96e7344d62d7d2d91a.jpg"
                          )
                        }
                        value="Sweet"
                      >
                        {" "}
                        حلويات{" "}
                      </Button>
                    </GridItem>

                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        borderRadius="20"
                        mr="0"
                        color={"white"}
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/564x/58/dd/ef/58ddef5f6f49d4f0755c21f185fc0ce2.jpg"
                          )
                        }
                        value="Healthy"
                      >
                        {" "}
                        الأطباق الصحيه{" "}
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button
                        bgColor={"#549A0A"}
                        borderRadius="20"
                        mr="0"
                        color={"white"}
                        onClick={(event) =>
                          setImage(
                            "https://i.pinimg.com/564x/32/d3/8c/32d38cc2a61e59f04719e3a594d8ceeb.jpg"
                          )
                        }
                        value="Drink"
                      >
                        {" "}
                        المشروبات{" "}
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  marginRight="30%"
                  bgColor={"#549A0A"}
                  paddingRight="10"
                  paddingLeft={"10"}
                  borderRadius="20"
                  color={"white"}
                  onClick={addNewItem}
                >
                  {" "}
                  أضف{" "}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Box>
        </Modal>
      </Box>

      <Grid
        dir="rtl"
        mt="10"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        p="20"
        w="100%"
      >
        {item.map((item: any) => (
          <HStack key={item.id}>
            <Card maxW="sm" dir="rtl">
              <CardBody>
                <Box marginRight={50} maxW={{ base: "100%", sm: "60%" }}>
                  <Image src={item.Image} borderRadius="lg" />
                </Box>

                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.productName} </Heading>
                  <Text>{item.productType}</Text>

                  <Text>{item.productDescription}</Text>
                  <Text color="green.500" fontSize="2xl">
                    {item.productPrice} ريال
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter paddingRight={70}>
                <ButtonGroup spacing="9">
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    حذف
                    {<IoMdCloseCircle />}
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </HStack>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;
