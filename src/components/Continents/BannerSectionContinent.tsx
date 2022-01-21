import {Heading, Box, Flex, Text, Center, useBreakpointValue, Image} from '@chakra-ui/react'

export default function BannerSectionContinent(continent) {

  return (
      <Center
        bgImage={`url(${continent.continent.slug}.jpg)`}
        bgRepeat="no-repeat"
        bgSize="cover"
        px="4"
        py="7"
        h={["150px" , "350px", "500px", "500px"]}    
      >
        <Flex w='100%' justify={'center'}>

          <Heading 
            as="h2"
            color="white"
            mb="4"
            fontSize ={['xl', 'xl', '4xl']}
            fontFamily={`'Poppins', sans-serif`}
            fontWeight={500}
          >
            {continent.continent.slug.toUpperCase()}
          </Heading>
        </Flex>



      </Center>
  )
}
