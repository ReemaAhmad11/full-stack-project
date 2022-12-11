// import  FocusLock from "react-focus-lock"

import { Button, ButtonGroup, FormControl, FormLabel, IconButton, Input,
  Box,
   Stack, 
   Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  MenuButton,
  Menu,
  MenuList,
  MenuItem, } from "@chakra-ui/react"
  import { IoIosAddCircle , IoMdClose} from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from "@chakra-ui/icons";


 function AddNewPost(){

  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)

  return (
    <>

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
          <Box dir="rtl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  paddingRight={180}>اضف منتج </ModalHeader>
          <ModalCloseButton />
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
    </>
  )
}
export default AddNewPost;