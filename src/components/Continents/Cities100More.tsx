import {Text, Flex, Box, Image } from '@chakra-ui/react'

import {continent100MoreCities} from '../../data/Cities/cities'

export default function Cities100More(continent) {
    console.log(continent100MoreCities[continent.continent.slug])

    
    return (
        <Box p='4'>

            <Flex gap='4' flexDir={'column'}  maxW={'1240px'} mx='auto' justify={'space-between'} mt='10' >
                <Text as="h4" fontFamily={'Poppins'} fontSize={'24'} fontWeight={'400'} color={'#47585B'}>Cidades +100</Text>

                <Flex flexWrap={'wrap'} flexDir={[ "column", "column", "row"]} gap="12px">

                    {continent100MoreCities[continent.continent.slug].map((city, index) => (
                        <Box key={index} maxW={'256px'} maxH={'279px'} mx='auto' my="5">
                            <Image w={'100%'} src={city.banner} alt={city.name} borderTopRadius={'0.5rem'} objectFit='cover'/>
                            <Flex w={'100%'} justify={'space-between'} p='24px' border={'1px'} borderTop={'0'} borderBottomRadius={'0.5rem'} borderColor={'yellow.500'} alignItems={'center'}>

                                <Flex flexDir={'column'} gap='12px' >
                                    <Text as='p' fontFamily={'Poppins'} fontSize={'20'} fontWeight={'500'} color={'#47585B'}>{city.name}</Text>
                                    <Text as='p' fontFamily={'Poppins'} fontSize={'16'} fontWeight={'400'} color={'#999999'}>{city.country}</Text>

                                </Flex>
                                <Image src={city.flag} alt={city.name} boxSize='30px' objectFit='cover' borderRadius='full' border={'1px'}/>
                            </Flex>
                        </Box>
                        
                    ))}
                </Flex>
                
            </Flex>
        </Box>

    )
}
