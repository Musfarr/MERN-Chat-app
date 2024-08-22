import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const Login = () => {

    const[islogin , setlogin] = useState(true)
    
    //Form Elements that needs Validation 
    






// const submit = (e) => {
//     e.preventDefault();

// }

  return (
    <Container maxWidth = 'xs'
     sx={{height:'100vh',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
    }} >
        <Paper
        
        elevation={3}
        sx={{
            padding : 4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent : 'center',
            
            
        }}>


            {islogin === true ?    
            <>
            <Typography variant='h4'> Login </Typography>
            <form >
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
            <>
            {/* Register Page */}
            <Typography variant='h4'> Register </Typography>
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

                <Button variant='contained'type='submit' size='large'  fullWidth  > Submit </Button>
                <Button variant='contained'type='submit' size='large'  fullWidth onClick={ () => setlogin(!islogin)} > Login </Button>

            </form>
            </>
            }
        </Paper>
    </Container>
  )
}

export default Login