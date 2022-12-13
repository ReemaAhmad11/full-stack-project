import {
  Image,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  GridItem,
  Grid,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color={'green.400'} fontStyle="italic" fontWeight={"bold"}>
هلاوالله          </Text>
        </Heading>
        <Text color={'Black.500'} maxW={'3xl'} fontSize="3xl">
          هل انت ؟
        </Text>

        <Stack spacing={6} direction={'row'}>
          
        <Button
        
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  color={"green.400"}
  
>
  جوعان
</Button>
<Grid templateColumns='repeat(2, 1fr)' gap={6}>
  
<Image src="https://t3.ftcdn.net/jpg/03/24/11/70/360_F_324117084_teePsAHoQ6znuO8JqiLXdcAKE1VaWeFF.jpg" width={"200px"} ml="-50px" />

<Image src="https://img.freepik.com/free-vector/cartoon-charcter-sticker-girl-with-baking-equipments_1308-68773.jpg?w=2000" width={"200px"} mr="-70px"  />
</Grid>


<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  color={"green.400"}
  
>
  اسر منتجه

</Button>


        </Stack>
      </Stack>
      
    </Container>

  );


}