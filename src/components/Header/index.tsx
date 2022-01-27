import {Flex } from '@chakra-ui/react'
import Image from 'next/image'

import {RiArrowDropLeftLine} from 'react-icons/ri'

import Logo from '../../../public/Logo.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Link as ChackraLink} from '@chakra-ui/react'

export default function Header() {

  const {asPath} = useRouter()

  return (
    <Flex 
      as="header"
      my='4'
      w='100%'
      align={'center'}
      maxW={'1240px'}
      mx='auto'
    > 

        {asPath !== '/' ?
            <Link href="/" passHref >
              <ChackraLink pl='2' cursor='pointer' >
                <RiArrowDropLeftLine size={24}/>

              </ChackraLink>
            </Link>
        : 
          <>

          </>}
        <Flex 
          justifyContent={'center'} 
          w='100%'
          h={[6, 6, 6, 12]}
          pr='2'
          
        >
          <Image src={Logo} alt='logo' />
        </Flex>
    </Flex>
  )
}
