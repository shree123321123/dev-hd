import { Button, Card, Paper, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { data } from '../data/CardDtata'
import { Link } from 'react-router-dom'
import { useContextProvider } from '../Context/ContextProvider'

const Cards = () => {
    return (
        <Stack bgcolor={"white"}
            direction={{ xs: "column", md: "row" }} width={{ xs: "100%", lg: "90%" }} display={"flex"} padding={"2rem 1rem"} margin={"auto"}
            flexWrap={"wrap"}
            sx={{ gap: { xs: "1.2rem", lg: "2rem" } }}
        >


            {data.map((item, i) => (
                <AllCard key={i}
                    delay={i === 3 ? i = 3 : i}
                    btnText={item.btnText} taital={item.taital} />
            ))}


        </Stack>
    )
}

export const AllCard = ({ taital, btnText, delay }) => {
   const {ApplyHendler}= useContextProvider()||{}
    return (

        <>
            <motion.div
                className='menucard'
                initial={{
                    y: '100%',
                    opacity: 0
                }}
                whileInView={{
                    y: '0',
                    opacity: 1
                }}
                transition={{ delay: delay / 8, duration: 0.5, ease: 'easeInOut' }}
            >
                <Paper elevation={1}
                    sx={{
                        textAlign: "center", padding: "1.4rem",
                        transition: ".5s",
                        "&:hover": {
                            scale: "1.1",

                        }

                    }}
                >
                    <Typography
                        sx={{
                            color: "#229DEA",
                            fontWeight: "500",
                            fontSize: { xs: "1.5rem", md: "1.8rem" }
                        }}
                    >{taital}</Typography>


                    <Button
                    onClick={()=>ApplyHendler(taital)}
                        sx={{
                            marginTop: "1rem", textTransform: "none",
                            "&:hover": {
                                bgcolor: "darkred"

                            }
                        }}
                        variant='contained' color='primary'>
                        {/* <Link style={{ display: "block", width: "100%" }} to={"/applay"}> */}
                            {btnText}
                        {/* </Link> */}
                    </Button>

                </Paper>

            </motion.div>
        </>
    )
}


export default Cards