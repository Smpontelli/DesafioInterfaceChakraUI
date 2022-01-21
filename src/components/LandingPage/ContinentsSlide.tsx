import {Heading, Box, Center, Text} from '@chakra-ui/react'
import Link from 'next/link'

interface ContinentsSlideProps {
  continent: 'europa' | 'america' | 'asia' | 'africa' | 'oceania'
}

export default function ContinentsSlide({continent}: ContinentsSlideProps) {
  const continents = {
    europa: {
      name: 'Europa',
      details: 'Europe is a continent located in the Northern Hemisphere. It is the largest and most populous continent in the world.',
      color: "gray.100",
      bg: 'blue.200',
      link: '/europa'
    },
    america: {
      name: 'América',
      details: 'America is a continent located in the Northern Hemisphere. It is the second largest and most populous continent in the world.',
      color: "gray.200",
      bg: 'blue.100',
      link: '/america'
    },
    asia: {
      name: 'Ásia',
      details: 'Asia is a continent located in the Eastern Hemisphere. It is the third largest and most populous continent in the world.',
      color: "gray.100",
      bg: 'blue.300',
      link: '/asia'
    },
    africa: {
      name: 'África',
      details: 'Africa is a continent located in the Northern Hemisphere. It is the second largest and most populous continent in the world.',
      color: "gray.200",
      bg: 'blue.100',
      link: '/africa'
    },
    oceania: {
      name: 'Oceania',
      details: 'Oceania is a continent located in the Southern Hemisphere. It is the smallest and most populous continent in the world.',
      color: "gray.200",
      bg: 'white',
      link: '/oceania'
    }
  }

  return (
    <Link href={continents[continent].link} passHref>
      <Center
        bg={continents[continent].bg}
        style={{backgroundBlendMode: 'multiply'}} 
        bgImage={`url(${continent}.jpg)`}
        bgPosition="10% 20%"
        bgRepeat="no-repeat"
        bgSize="cover"
        px="10"
        h={['150px' , '350px', '450px', '450px']} 
        flexDirection={'column'}
        cursor={'pointer'}
      >
        <Box >

          <Heading 
            as="h1"
            color={continents[continent].color}
            mb="4"
            size='lg'
            fontFamily={`'Poppins', sans-serif`}
            fontWeight={700}
          >
            {continents[continent].name}
          </Heading>

          <Text 
            color={continents[continent].color}
            fontFamily={`'Poppins', sans-serif`}
            fontWeight={700}
            fontSize='sm'
          >
            {continents[continent].details} 
          </Text>
        </Box>
      </Center>
    </Link>
  )
}
