import { ReactNode, useState } from 'react';

import {useNavigate} from 'react-router-dom';

import axios from "axios";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';





import { 
  AiOutlineArrowRight,
  AiOutlineArrowLeft
} from "react-icons/ai";
import {
  FaRobot
} from "react-icons/fa";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome ,path: "/" },
  { name: "Sign Up", icon: AiOutlineArrowRight , path: "/signup"},
  // { name: "Login", icon: AiOutlineArrowLeft , path: "/login"},
  { name: "Login for AI", icon: FaRobot , path: "/login"},
];





const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);



export default function Nav() {



  const navigate = useNavigate();

  const [username, setUsername] = useState("Joamma");

  async function updateName() {
    
    const req = await axios.get('https://localhost:3000/api/dashboard', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(req.data.username){
      setUsername(req.data.username);
    }
    }
    
    updateName()


  function logout(){
    localStorage.removeItem("token");
    navigate("/");
}

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>4SKN</Box>

    


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

           
      {/* <Button colorScheme='pink'>Sign In</Button>

      <Button colorScheme='red'>Sign Out</Button> */}
                 {localStorage.getItem("token")!==null ? <Button colorScheme="purple" onClick={logout} >Logout</Button>:<Button colorScheme="blue" onClick={()=>navigate("/login")}>Login</Button> }
         {/* {localStorage.getItem("current")==="login" ? <Button colorScheme="pink" onClick={()=>{navigate("/")}}>SignUp</Button>: null } */}
         {localStorage.getItem("token")!==null ? <Button colorScheme="red" onClick={()=>navigate("/Ai")}>Ai</Button>:null}


              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p> {`${username}`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}