import {UnorderedList, ListItem, Text, Wrap, WrapItem, ListIcon} from '@chakra-ui/react'
export default function TravelTypes() {

  return (

        <Wrap p='10' spacing='10' justify='center'>
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

  )
}
