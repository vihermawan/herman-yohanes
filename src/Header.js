import React, { useEffect } from 'react';
import { Box, Heading, Flex, useColorMode, IconButton, Button, useDisclosure, Spacer } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function Header(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const { onOpen } = useDisclosure()

    const changeDarkMode = () => {
        toggleColorMode();
    }

    useEffect(()=> {
        if(colorMode === "light"){
            props.setDarkMode(false)
        }else{
            props.setDarkMode(true)
        }
    },[colorMode])

    return ( 
        <> 
            <Flex
                as="header"
                align="center"
                position="fixed"
                zIndex="9999"
                padding="1.5rem"
                width="full"
                color={colorMode === "light" ? "black" : "white"}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base: "sm", md: "md", sm: "md", lg: "md" }}>
                        Vihermawan
                    </Heading>
                </Flex>
                <Spacer />
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                >
                   <Button 
                        mt={{ base: 5, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                    >
                        Gedung Herman Yohanes 
                    </Button>
                </Box>
                <Spacer />
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                    alignContent="center"
                >
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={()=>changeDarkMode()} aria-label="button" />
                </Box>
                <Box display={{ base: "block", md: "none", lg: "none" }}>
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={()=>changeDarkMode()} aria-label="button" />
                    <Button size="xs" bg="transparent" onClick={onOpen} aria-label="button-modal">👋</Button>
                </Box>
            </Flex>
    
    </>
    );
}
 
export default Header;