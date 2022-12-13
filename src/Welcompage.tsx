import React from 'react'
import { Button,Text,Image, Stack, Grid, GridItem } from "@chakra-ui/react"
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
function Welcompage() {
  return(
<Grid>
  
    <Image  src= "./pic1.png" width="120" height="120" /> 
    <Image src ="./pic2.png" width="120" height="120" />

     <Image src="./pic3.png" width="120" height="120" />
    
     <Image src="./pic4.jpg" width="120" height="120"  />
     <Image src="./pic5.jpeg" width="120" height="120"/>
       <Image src="./pic1.png" width="120" height="120" />
     <Image src='./pic2.png'  width="120" height="120"/>
     
      <Grid templateColumns='repeat(5, 1fr)' gap={12}>
      <GridItem >
         <Text fontFamily="sans-serif" fontWeight={"bold"} fontSize={"9xl"}  > قوت         
      </Text>
      
       <Text fontFamily="sans-serif" fontWeight={"bold"} fontSize={"3xl"}  className="text"  > يخسى الجوع         
       </Text>
      <Stack direction='row' spacing={20}>
      
      <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid' >
           تسجيل دخول
          </Button>
      
          <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
              انشاء حساب 
           </Button>
            </Stack>
            </GridItem>
            </Grid>
            </Grid>

)
}
export default Welcompage