import { Box, Flex, Avatar, Text,
 Heading, VStack, FormControl, FormLabel,Input, HStack,
Button , FormErrorMessage,FormHelperText, useColorModeValue, } from "@chakra-ui/react";
import { useEffect, useState } from 'react';



  
 const Payment=() => {
const [Cardnumber, setCardnumber] = useState('')
const [Cardate, setCardate] = useState('')
const [CardName, setCardName] = useState('')

    return(
        
     <Box maxW='700' borderWidth='2px' overflow='hidden' dir="rtl" ml="9" mt="4" alignItems="center" shadow="lg" marginLeft="35%" marginTop="100" width={600}>
        <VStack paddingTop='10' paddingBottom="10">
        <Heading as="h4" fontSize="24" >معلومات الدفع </Heading>
        <p> اهلا باسرتنا الجديده  </p>
        <FormControl>
            <FormLabel color='#5B9248' size="sm" marginRight="51">
                رقم البطاقة 
            </FormLabel>
    <Input  type="text" bg="white" value={Cardnumber} borderColor="black" placeholder="0000 0000 0000 0000" width="80%"  marginRight="50"></Input>
        </FormControl>
        <FormControl paddingTop="5">
            <FormLabel color='#5B9248' size="sm" marginRight="51"> تاريخ الانتهاء </FormLabel>
            <HStack>
    <Input type="number" bg="white" borderColor="black" placeholder="الشهر" width='40%' marginRight="50"></Input>
    <Input type="number" bg="white" borderColor="black" placeholder="السنة" width='40%' marginRight="50"></Input>

    </HStack>
        </FormControl>
        <FormControl paddingTop="5" >
            <FormLabel color='#5B9248' size="sm" marginRight="51">
                اسمك في البطاقة 
            </FormLabel>
    <Input type="text" bg="white" borderColor="black" placeholder="ادخل اسمك" width="80%" marginRight="50"></Input>
        </FormControl>
        <HStack>
        <Text paddingTop='6'>بانشاء الحساب فا انت توافق بالكامل على جميع </Text>
         <Text paddingTop='6' color='#5B9248'> الشروط و الاحكام </Text>
        </HStack>
        <HStack paddingTop='6'>
        <Text  paddingRight={0}>هل لديك حساب بالفعل ؟</Text>
         <Text  color='#5B9248'>تسجيل الدخول</Text>
         <Button color='white' 
           bgColor={"#549A0A"} 
           borderRadius="20"
              mt={8}
              size={'lg'}
              py={'7'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}> انشاء حساب </Button>
        </HStack>
       
        </VStack>

    
     </Box>
    )


}
export default Payment