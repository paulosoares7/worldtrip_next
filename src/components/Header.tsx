import { Box, Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import {RiArrowLeftSLine } from 'react-icons/ri';
import Link from "next/link";


export function Header(){
  const {asPath} = useRouter()
  const notHomePage= asPath !== '/'

  if(!notHomePage){
    return (
      <Flex
      as= 'header'
      w='100%'
      h='24'
      mx='auto'
      maxWidth={1460}
      alignItems='center'
      justifyContent="center"
      >
        <Image
          src="/logo.png"
          alt="Logo"
        />  
      </Flex>
    )
  }
  if(notHomePage){
    return (
      <Flex
      as= 'header'
      w='100%'
      px='140px'
      h='24'
      mx='auto'
      maxWidth={1460}

      >
        <Grid
        templateColumns='repeat(3,1fr)'
        gap={40}
        mx='auto'
        alignItems='center'
        justifyContent="center"

        >
          <Box as='a'>
            <Link href='/'>
              <Icon as={RiArrowLeftSLine} justifySelf='start' fontSize='38'/>
            </Link>
          </Box>

            <Image
              src="/logo.png"
              alt="Logo"
            /> 
          </Grid>
        </Flex>

      )
    }
}