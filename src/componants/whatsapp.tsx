import {
    Center,
    Box,
    chakra,
    useColorModeValue,
    VisuallyHidden,
    Stack
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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
      bg={'white'}
      color={'green'}
      _focus={{
        bg: 'green',
      }}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        mb={0}
        pb={0}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

function Whatsapp() {
  return (
  
        <Center p={6}>
            <Box
          maxW={'500px'}
          w={'full'}
          boxShadow={'xl'}
          rounded={'md'}
          p={30}
          borderColor="black"
          
          >

    <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'Whatsapp'} href={'https://wa.me/0502613369'}>
                <FaWhatsapp fontSize="500px">
                </FaWhatsapp>
              </SocialButton>
          </Stack>

        </Box>
    </Center>

	);
}

export default Whatsapp