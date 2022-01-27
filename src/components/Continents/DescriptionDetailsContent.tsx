import {Text, Flex, Box} from '@chakra-ui/react'


export default function DescriptionDetailsContent(continent) {

    const continents = {
        europa: {
          details: 'Europe is a continent located in the Northern Hemisphere. It is the largest and most populous continent in the world.',
          countries: '44',
          languages: '24',
          hundredMoreCities: '26',
        },
        america: {
          details: 'America is a continent located in the Northern Hemisphere. It is the second largest and most populous continent in the world.',
          countries: '35',
          languages: '6',
          hundredMoreCities: '14',
        },
        asia: {
          details: 'Asia is a continent located in the Eastern Hemisphere. It is the third largest and most populous continent in the world.',
          countries: '48',
          languages: '2300',
          hundredMoreCities: '42',
        },
        africa: {
          details: 'Africa is a continent located in the Northern Hemisphere. It is the second largest and most populous continent in the world.',
          countries: '54',
          languages: '2000+',
          hundredMoreCities: '5',
        },
        oceania: {
          details: 'Oceania is a continent located in the Southern Hemisphere. It is the smallest and most populous continent in the world.',
          countries: '22',
          languages: '7',
          hundredMoreCities: '3',
        }
      }

  return (
    <Box p='4'>

      <Flex gap='4' flexDir={[ "column", "column", "row"]} maxW={'1240px'} mx='auto' justify={'space-between'} mt='10' >
          <Text as="h3" fontFamily={'Poppins'} fontSize={['14px', '14px', '24px']} maxW={['', '', '50%']}>
              {continents[continent.continent.slug].details}
          </Text>

          <Flex gap='12' justifyContent={'center'}>
            <Box>
              <Text as="p" fontSize={['18px', '18px', '24px']} display={'flex'} flexDir={'column'} alignItems={'center'}>
                  <Text as="span"fontSize={['24px', '24px', '48px']} fontWeight={'500'} color="yellow.500" >
                    {continents[continent.continent.slug].countries} 
                  </Text>
                  países
              </Text>
            </Box>

            <Box>
              <Text as="p" fontSize={['18px', '18px', '24px']} display={'flex'} flexDir={'column'} alignItems={'center'}>
                  <Text as="span" fontSize={['24px', '24px', '48px']} fontWeight={'500'} color="yellow.500" >
                    {continents[continent.continent.slug].languages}
                  </Text>
                    linguagens
              </Text>
            </Box>

            <Box>
              <Text as="p" fontSize={['18px', '18px', '24px']} display={'flex'} flexDir={'column'} alignItems={'center'}>
                <Text as="span" fontSize={['24px', '24px', '48px']} fontWeight={'500'} color="yellow.500" >
                  {continents[continent.continent.slug].hundredMoreCities} 
                </Text>
                  cidades 100+
              </Text>
            </Box>

          </Flex>
      </Flex>
    </Box>
  )
}
