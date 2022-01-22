import {UnorderedList, ListItem, Text, Wrap, WrapItem, ListIcon, useBreakpointValue, Box, List} from '@chakra-ui/react'
import {FaCocktail, FaRegBuilding} from 'react-icons/fa'
import {GiSurfBoard, GiGreekTemple} from 'react-icons/gi'
import {IoMdGlobe} from 'react-icons/io'
export default function TravelTypes() {

    const isWideVersion = useBreakpointValue ({
        base: true,
        md: false,
    })

  return (
    <>
        {isWideVersion ? 

            <Wrap p='10' spacing='10' justify='center' maxW={'1240px'}>
                <WrapItem>
                    <UnorderedList 
                        color="yellow.500"
                    >
                        <ListItem > 
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize='lg'>Vida noturna</Text>
                        </ListItem>
                    </UnorderedList>
                </WrapItem>
                <WrapItem>
                    <UnorderedList 
                        color="yellow.500"
                    >
                        <ListItem > 
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize='lg'>praia</Text>
                        </ListItem>
                    </UnorderedList>
                </WrapItem>

                <WrapItem>
                    <UnorderedList 
                        color="yellow.500"
                    >
                        <ListItem > 
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize='lg'>moderno</Text>
                        </ListItem>
                    </UnorderedList>
                </WrapItem>

                <WrapItem>
                    <UnorderedList 
                        color="yellow.500"
                    >
                        <ListItem > 
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize='lg'>clássico</Text>
                        </ListItem>
                    </UnorderedList>
                </WrapItem>

                <WrapItem>
                    <UnorderedList 
                        color="yellow.500"
                    >
                        <ListItem > 
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize='lg'>e mais...</Text>
                        </ListItem>
                    </UnorderedList>
                </WrapItem>
            </Wrap>

            :

            <Box p='10'>
                    <List 
                        color="yellow.500"
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        maxW={'1240px'}
                        w={'100%'}
                        mx={'auto'}
                        
                    >
                        <ListItem 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                         > 
                            <ListIcon as={FaCocktail} boxSize={'85px'} color='yellow.500' mb={4}/>
                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize={['lg', '2xl']}>vida noturna</Text>
                        </ListItem>
                        <ListItem 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                         > 
                            <ListIcon as={GiSurfBoard} boxSize={'85px'} color='yellow.500' mb={4} />

                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize={['lg', '2xl']}>praia</Text>
                        </ListItem>

                        <ListItem 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                         > 
                            <ListIcon as={FaRegBuilding} boxSize={'85px'} color='yellow.500' mb={4} />

                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize={['lg', '2xl']}>moderno</Text>
                        </ListItem>
                        <ListItem 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                         > 
                            <ListIcon as={GiGreekTemple} boxSize={'85px'} color='yellow.500' mb={4} />

                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize={['lg', '2xl']}>clássico</Text>
                        </ListItem>
                        <ListItem 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                         > 
                            <ListIcon as={IoMdGlobe} boxSize={'85px'} color='yellow.500' mb={4} />

                            <Text color="gray.600" fontFamily={`'Poppins', sans-serif`}
                            fontWeight={500}
                            fontSize={['lg', '2xl']}>e mais...</Text>
                        </ListItem>
                    </List>
            </Box>
        }

    </>

  )
}
