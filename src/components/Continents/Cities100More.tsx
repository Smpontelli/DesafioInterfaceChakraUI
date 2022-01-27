import {Text, Flex, Box, Image } from '@chakra-ui/react'

import {continent100MoreCities} from '../../data/Cities/cities'

export default function Cities100More(continent) {
    console.log(continent100MoreCities[continent.continent.slug])

    
    return (
        <Box p='4'>

            <Flex gap='4' flexDir={[ "column", "column", "row"]} maxW={'1240px'} mx='auto' justify={'space-between'} mt='10' >
                {continent100MoreCities[continent.continent.slug].map((city, index) => (
                    <Box key={index}>
                        <Image src={city.banner} alt={city.name}/>
                        <Flex>

                            <Box>
                                <Text as='h4'>{city.name}</Text>
                                <Text as='p'>{city.country}</Text>

                            </Box>
                            <Image src={city.flag} alt={city.name}/>
                        </Flex>
                    </Box>
                    
                ))}
            </Flex>
        </Box>

    )
}
