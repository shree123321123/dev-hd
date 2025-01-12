import { Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { logo } from '../data/photo'

const Header = () => {
    useParams()
    return (
        <Stack width={"100%"} direction={"row"}
            justifyContent={"space-between"} bgcolor={"white"} height={{ xs: "4rem", md: "5.5rem" }}
            padding={{ xs: "0px 1.5rem", md: " 0px 4rem" }}
            sx={{
                position: "fixed", top: 0, zIndex: "1000",
                background: "linear-gradient(132deg, rgb(255 255 255) 0%, rgb(234, 236, 237) 60%, rgba(234, 236, 237) 83%);"
            }}
        >
            <img src={logo} alt="" />

   


        </Stack>
    )
}

export default Header