import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNav } from './MainNav'

export const Parent = () => {
  return (
   <>
  <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        // backgroundColor:"red"
      }}
    >
      <MainNav />
      {/* <Hidden mdUp>
            <Header>
             
            </Header>
          </Hidden> */}
      <Box sx={(theme)=>({ width: "100%",backgroundColor:theme.palette.mode === "light" ? "#ffffff":'#3A3A3Aa1',minHeight:"100vh" })}>
        <Outlet />
      </Box>
    </Box>
   
   </>
  )
}
