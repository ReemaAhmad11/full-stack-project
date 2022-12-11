import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
   Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuList, MenuItem,
  IconButton,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  useDisclosure
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdEditLocation, MdLocalShipping } from 'react-icons/md';
  import { IoIosAddCircle , IoMdClose} from "react-icons/io";
  import { useEffect, useRef, useState } from 'react';
  import AddNewPost from './AddPostToProvider';


  interface prdect {
    id:string,
    type:string,
    title :string,
    details:string,
    imageUrl:string,
    
  }

  interface family{
    id:string,
    name:string,
  }
  
  export default function Prodect() {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
      <Box paddingTop='100' >
        <Box marginRight="120" alignItems="center" dir="rtl">
        <IconButton
  bgColor={"#549A0A"} 
  colorScheme="white"
  aria-label='Add new Post '
  onClick={onOpen}
  icon={<IoIosAddCircle/>}
/>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
         >
          <Box  dir="rtl">
         
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingRight={180}>اضف منتج </ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
          <FormControl>
            <FormLabel> اسم المنتج </FormLabel>
            <Input type ="text" />
            <FormLabel> وصف المنتج </FormLabel>
            <Input type ="text" />
            <FormLabel> سعر المنتج </FormLabel>
            <Input type ="number" />
          </FormControl>
          <Box paddingTop={5}>
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    اختر الصنف 
  </MenuButton>
  <MenuList>
    <MenuItem>اطباق رئسية</MenuItem>
    <MenuItem>مقبلات </MenuItem>
    <MenuItem>حلويات</MenuItem>
    <MenuItem>شعبيات</MenuItem>
    <MenuItem>مشروبات</MenuItem>
  </MenuList>
</Menu>
</Box>
<Box paddingTop={"10"}>
<FormLabel> أضف صورة المنتج</FormLabel>
<Input type="file" name="image" placeholder='Image' />
</Box>
          </ModalBody>

          <ModalFooter>
          <Button  marginRight="30%" bgColor={"#549A0A"}  paddingRight='10' paddingLeft={'10'} borderRadius="20" color={"white"}> نشر </Button>
          </ModalFooter>
        </ModalContent>
        </Box>
      </Modal>

    </Box>
  

      <Container paddingTop='50' maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
         borderWidth='2px'dir="rtl" shadow="lg">
        
          <Flex>                
            <Image
              rounded={''}
              alt={'product image'}
              src={'https://th.bing.com/th/id/R.b2f13038c3f7388afdac713fa5194ee6?rik=kVjPtg9i5FklSA&pid=ImgRaw&r=0'}
              fit={'cover'}
              align={'center'}
              w={'50%'}
              h="300"
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} marginRight='-300' paddingTop="8%">
            <Box >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                كيكة الليمون
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'} 
                paddingTop='5'>
                90 RS
              </Text>
              <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                  >
                 الصنف :حلويات
                </Text>


                <Text fontSize={'lg'}>
                 تنابقنستينيثباسنتيبتيتىيبتيباستتايعنثسمثتخهمهنتيمشصتيكضخسكشخيتمهشيمثستبمثهس
                </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      </Box>
    );
  }