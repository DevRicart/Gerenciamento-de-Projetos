import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Register = () => {
  const [registerLogin, setRegisterLogin] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  return (
    <div className='Register-body'>
    <Grid item xs={12}>
      <div className='Register-section'>
        <img className='Register-img' src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" />
        <FormControl>
          <Input
            id="login_nome"
            aria-describedby="login_nome_helper_text"
            value={registerLogin}
            onChange={(e) => setRegisterLogin(e.target.value)}
          />
    <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
  </FormControl>

  <FormControl>
    <Input
      id="login_senha"
      aria-describedby="login_senha_helper_text"
      type="password"
      value={registerPassword}
      onChange={(e) => setRegisterPassword(e.target.value)}
    />
    <FormHelperText id="login_senha_helper_text">Password</FormHelperText>
  </FormControl>
  <div className='Register-links'>
    <p className='Account-text'>Already have an account? <a className='Register-link' href=''>Sign in</a></p> 
  </div>
      </div>       
    </Grid>
    </div>
  );
}

export default Register;