import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Stack,} from '@mui/material';
import { HomeImg, bh, h, h1, h2, h3, h4, h5 } from '../data/photo';
import { motion } from 'framer-motion'
import './hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === HomeImg.length - 1 ? 0 : prevSlide + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <>

            <Stack direction={{ xs: "column-reverse", md: "row" }}


                sx={{
                    paddingTop: { xs: "4rem", md: "5.5rem" },
                    paddingBottom: { xs: "3rem", md: "2rem" },
                    background: "linear-gradient(132deg, rgb(255 255 255) 0%, rgb(234, 236, 237) 60%, rgba(234, 236, 237) 83%);"
                }} minHeight={"100vh"}  >

                <Stack width={{ xs: "100%", md: "70%" }} marginLeft={{ xs: "0", md: "6%" }} marginTop={{ xs: "0", md: "5%" }}  >

                    <Stack bgcolor={"rgb(56, 118, 231)"}
                        height={"80px"} width={{ xs: "100%", md: "70%" }} justifyContent={{ xs: "center", md: "start" }} spacing={"1.7rem"} direction={"row"} alignItems={"center"}>

                        <img height={"46px"} src={h} alt="" />
                        <img height={"46px"} src={h1} alt="" />
                        <img height={"46px"} src={h2} alt="" />
                        <img height={"46px"} src={h3} alt="" />
                    </Stack>

                    <Stack
                        height={"80px"}
                        width={{ xs: "100%", md: "60%" }} justifyContent={{ xs: "center", md: "start" }} spacing={"1.2rem"} direction={"row"} alignItems={"center"}>
                        <img height={"75px"} src={h4} alt="" />
                        <Stack border={"3px solid black"} height={"60%"}></Stack>
                        <img height={"75px"} src={h5} alt="" />
                    </Stack >
                    <Stack overflow={"hidden"} paddingBottom={{ xs: "3rem 0", md: "0" }} width={{ xs: "100%", md: "60%" }}>
                        < motion.ul style={{ width: "100%", listStyle: "outside", display: "flex", flexDirection: "column", gap: "0" }}

                            initial={{
                                y: '100%',
                                opacity: 0,
                                transform: "scale(1.5)"

                            }}
                            whileInView={{
                                y: '0',
                                opacity: 1,
                                transform: "scale(1)"

                            }}
                            transition={{ duration: .8, ease: 'easeInOut' }}
                        >

                            <li>Virtual Debit Card can be self generated from Mobile Banking - bob World app. </li>
                            <li>
                                Facilitates cashless transactions Easy and convenient to use
                            </li>

                            <li>
                                Easy Blocking and unblocking
                            </li>
                            <li>
                                Easy and convenient to use
                            </li>
                            <Link to={'/redem'}>
                            <Button
                            
                                variant='contained'
                             
                                sx={{
                                    backgroundColor:"#ff0080",
                                    width: "11rem", borderRadius: "1rem",
                                    textTransform: "none", margin: { xs: " 2rem auto", md: "1.5rem 0" },
                                }}>
                                 Redem Now  
                                </Button>
                                  </Link>
                        </motion.ul>

                    </Stack>

                </Stack>


                <Box height={"100%"} width={{ xs: "100%", md: "40%" }} padding={{ xs: "0 .8rem", md: "0" }} paddingBottom={{ xs: "4rem", md: "0" }}  >

                    <Slider {...settings} >
                        {HomeImg.map((image, index) => (

                            <Stack key={index} className={`slider-item ${index === currentSlide ? 'active' : ''}`} height={{ xs: "50vh", md: "81vh" }}

                            >
                                <img
                                    src={image.img}
                                    alt={`slide-${index}`}
                                    className='bgimg'
                                    style={{ width: '100%', height: "100%", objectFit: 'cover', outline: "none" }}
                                />
                            </Stack>

                        ))}
                    </Slider>
                </Box>


            </Stack>

            <Stack overflow={"hidden"}>
                <motion.img 
                 initial={{
                    y: '100%',
                    opacity: 0,
                    transform: "scale(1.5)"

                }}
                whileInView={{
                    y: '0',
                    opacity: 1,
                    transform: "scale(1)"

                }}
                transition={{ duration: .8, ease: 'easeInOut' }}
            
                src={bh} alt="" />
            </Stack>

            <Stack overflow={"hidden"} width={{ xs: "85%", md: "80%" }} padding={"2rem 0px"} spacing={"1.5rem"} margin={"auto"}>
                < motion.p 
                 initial={{
                    y: '100%',
                    opacity: 0,
                    transform: "scale(1.5)"

                }}
                whileInView={{
                    y: '0',
                    opacity: 1,
                    transform: "scale(1)"

                }}
                transition={{ duration: .8, ease: 'easeInOut' }}
            
                style={{
                    color: "#229DEA",
                    fontSize: "2.3rem",
                    fontWeight: "700"
                }}>
                    One-Stop-Spot for all accounts
                </ motion.p >


                < motion.p 
                 initial={{
                    y: '100%',
                    opacity: 0,
                    transform: "scale(1.3)"

                }}
                whileInView={{
                    y: '0',
                    opacity: 1,
                    transform: "scale(1)"

                }}
                transition={{ duration: .8, ease: 'easeInOut' }}
                >
                    Scrambling to keep track of multiple accounts and their passwords and OTPs is so last year. Bring all your accounts under one secure roof with a unified platform that acts as your own personal universal remote for banking.
            
                </ motion.p >
                

            </Stack>

        </>
    );
};

export default Hero;
