import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';

const RegisterPage = () => {
  return (
    <Container maxWidth="100vh" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff' }}>
      <Box sx={{ 
        p: 3, 
        bgcolor: '#fff', 
        width: '100%', 
        height: '90vh',
        marginTop: '40px', 
        }}
      >
        <Typography variant="h5" style={{ fontWeight: 'bold', fontFamily: 'Poppins', color: '#8B93FF', marginBottom: '5px' }}>Create an account.</Typography>
        <p style={{ marginBottom: '70px', fontFamily: 'Poppins', fontSize: '13px' }}>By signing up you agree to our <a style={{ fontWeight: 'bold' }}> Terms of Use</a> and <a style={{ fontWeight: 'bold' }}> Privacy Policy</a>
        </p>
        <form style={{ width: '100%', textAlign: 'center' }}>
          <TextField label="Name" fullWidth size="large" style={{ marginBottom: '15px' }} />
          <TextField label="Email" fullWidth size="large" style={{ marginBottom: '15px' }} />
          <TextField label="Password" type="password" fullWidth size="large" style={{ marginBottom: '30px' }} />
          <Button href="/login" type="submit" variant="contained" color="primary" fullWidth style={{ height: '60px', fontFamily: 'Poppins', textTransform: 'none', fontWeight: 'bold', backgroundColor: '#8B93FF' }}>Sign up</Button>
        </form>
        <Typography variant="body1" align="center" style={{ marginTop: '30px', fontFamily: 'Poppins', fontSize: '13px' }}>
          Or sign up with social account. <a href="/login" style={{ fontWeight: 'bold' }}> Sign in here</a>
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <Button variant="outlined" color="primary" style={{ marginLeft: '10px', fontFamily: 'Poppins', textTransform: 'none', width: '200px' }} startIcon={<Google />}>&nbsp;Google</Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: '10px', fontFamily: 'Poppins', textTransform: 'none', width: '200px' }} startIcon={<Facebook />}>&nbsp;Facebook</Button>&nbsp;&nbsp;&nbsp;
        </div>
      </Box>
    </Container>
  );
};

export default RegisterPage;
