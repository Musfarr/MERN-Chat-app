import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const Login = () => {
    const[islogin , setlogin] = useState(true)
  return (
    <Container maxWidth = 'sx' >
        <Paper
        
        elevation={3}
        sx={{
            
            marginTop:'250px',
            padding : 4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent : 'center',
            
            
        }}>


            {islogin === true ?    
            <>
            <Typography variant='h4'> Login </Typography>
            <form>
                <TextField
                label = "Username"
                required
                variant='outlined'
                size='medium'
                margin='normal'
                fullWidth
                />

                <TextField
                label = "Password"
                required
                variant='outlined'
                size='medium'
                margin='normal'
                fullWidth
                />

                <Button variant='contained'type='submit' size='large'  fullWidth  > Login </Button>
                <Button variant='contained'type='submit' size='large'  fullWidth onClick={ () => setlogin(!islogin)} > Register </Button>

            </form>
            </>
            :
            <Typography variant='h4'> Register </Typography>

            
            }
        </Paper>
    </Container>
  )
}

export default Login