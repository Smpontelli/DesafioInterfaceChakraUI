import {Heading, Box, Flex, Text, Center, useBreakpointValue, Image} from '@chakra-ui/react'

export default function BannerSection() {

  const isWideVersion = useBreakpointValue ({
    base: false,
    md: true,
})

  return (
      <Center
        bgImage="url('HomeBg.jpg')"
        bgPosition="10% 20%"
        bgRepeat="no-repeat"
        bgSize="cover"
        px="4"
        py="7"
        
      >
        <Flex maxW={'1240px'} w='100%' justify={'space-between'}>

          <Flex 
            flexDirection={'column'}
            justify={['flex-start', 'flex-start','center']}
            // alignItems={'center'}
          >

            <Heading 
              as="h1"
              color="white"
              mb="4"
              fontSize ={['xl', 'xl', '4xl']}
              fontFamily={`'Poppins', sans-serif`}
              fontWeight={500}
              maxW={'426px'}
            >
              5 Continentes, infinitas possibilidades.
            </Heading>

            <Text 
              color="gray.200"
              fontFamily={`'Poppins', sans-serif`}
              fontWeight={300}
              fontSize={['sm', 'sm', 'xl']}
              maxW={'524px'}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Flex>

          {isWideVersion && (
          <Box>
            <Image src='Airplane.png' alt='plane' />
          </Box>

          )}
        </Flex>



      </Center>
  )
}
