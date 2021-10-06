import React, { useState,useEffect} from 'react'
import { ChakraProvider,Box } from "@chakra-ui/react"
import Header from './Header'
import Herman3D from './Herman3d'

export default function Viewer() {
  const [gradient, setGradient] = useState("linear(to-r, #3eadcf, #abe9cd)")
  const [darkMode,setDarkMode] = useState(false)

  useEffect(()=> {
    if(darkMode){
      setGradient("linear(to-r, #09203f, #537895)")
    }else{
      setGradient("linear(to-r, #3eadcf, #abe9cd)")
    }
  },[darkMode])

  return (
    <ChakraProvider>
      <Box h="100vh" w="full" bgGradient={gradient}>
      <Header setDarkMode={setDarkMode}/>
      <Herman3D/>
      </Box>  
    </ChakraProvider>
  )
}