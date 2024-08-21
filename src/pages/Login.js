import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
    <Container maxWidth = 'sx'>
        <Paper sx={{
            padding : 4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent : 'center'
            
        }}>
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

                <Button variant='contained'type='submit' size='large'  fullWidth > Login </Button>
                <Button variant='contained'type='submit' size='large'  fullWidth > Register </Button>

            </form>
        </Paper>
    </Container>
  )
}

export default Login