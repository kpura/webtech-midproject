import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';

const LoginPage = () => {
  return (
    <Container maxWidth="100vh" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff' }}>
      <Box sx={{ 
        p: 3, 
        bgcolor: '#fff', 
        width: '100%', 
        height: '90vh',
        marginTop: '60px', 
        }}
      >
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: '#8B93FF' }}>Log in</Typography>
        <p style={{ marginBottom: '70px', fontFamily: 'Poppins', fontSize: '13px' }}>Please fill out the forms below to get started. 
          If you haven't registered yet, please click on
          <a href="/register" style={{ fontWeight: 'bold' }}> Sign up</a>
        </p>
        <form>
          <TextField label="Email Address" fullWidth size="large" style={{marginBottom: '15px' }} />
          <TextField label="Password" type="password" fullWidth size="large" style={{marginBottom: '10px' }} />
          <p style={{ marginBottom: '30px', fontFamily: 'Poppins', fontSize: '13px', textAlign: 'right' }}>
            <a href="/" style={{ fontWeight: 'bold', justifyContent: 'right', marginRight: '10px' }}>Forgot your password?</a>
          </p>
          <Button href="/home" type="submit" variant="contained" color="primary" fullWidth size='large' style={{ height: '60px', fontFamily: 'Poppins', textTransform: 'none', fontWeight: 'bold', backgroundColor: '#8B93FF' }} >Log in</Button>
        </form>
        <Typography variant="body1" align="center" style={{ marginTop: '30px', fontFamily: 'Poppins', fontSize: '13px' }}>
          Or sign up with social account
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <Button variant="outlined" color="primary" style={{ marginLeft: '10px', fontFamily: 'Poppins', textTransform: 'none', width: '200px' }} startIcon={<Google />}>&nbsp;Google</Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: '10px', fontFamily: 'Poppins', textTransform: 'none', width: '200px' }} startIcon={<Facebook />}>&nbsp;Facebook</Button>&nbsp;&nbsp;&nbsp;
        </div>
      </Box>
    </Container>
  );
};

export default LoginPage;
