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
} from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Menu = () => {
  const [item, setItem] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

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
    console.log(data);
  };

  const addNewItem = async () => {
    try {
      if (!title && !description && !price && !type && !image) {
        toast({
          title: " all fileds are required ",
          status: "error",
          duration: 3000,
          position: "top",
        });

        return;
      }
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
    <>
      <Box m="20" mb="1" alignItems="center" dir="rtl">
        <Button
          bgColor={"#549A0A"}
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
                <Box paddingTop={5}>
                  <Select
                    w="30"
                    placeholder="اختر الصنف"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="MainDishe">اطباق رئسية</option>
                    <option value="Appetizer">مقبلات </option>
                    <option value="Sweet">حلويات</option>
                    <option value="Traditional">شعبيات</option>
                    <option value="Drink">مشروبات</option>
                  </Select>
                </Box>
                <Box paddingTop={"10"}>
                  <FormLabel> أضف صورة المنتج</FormLabel>
                  <Input
                    onChange={(e) => setImage(e.target.value)}
                    type="file"
                    name="image"
                    placeholder="Image"
                  />
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
                  نشر{" "}
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
                  <Image
                    src="https://i.pinimg.com/236x/32/11/6c/32116cf770ecb0e877c40d32e48a51e2.jpg"
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
                    Delete
                    {<IoMdCloseCircle />}
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </HStack>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
