import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='Login-body'>
    <Grid item xs={12}>
      <div className='Login-section'>
        <img className='Login-img' src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" />
        <FormControl>
          <Input
            id="login_nome"
            aria-describedby="login_nome_helper_text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
    <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
  </FormControl>

  <FormControl>
    <Input
      id="login_senha"
      aria-describedby="login_senha_helper_text"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <FormHelperText id="login_senha_helper_text">Password</FormHelperText>
  </FormControl>
  <div className='Login-links'>
    <a className='Login-link' href=''>Register</a>
    <a className='Login-link' href=''>Forgot password?</a>
  </div>
      </div>       
    </Grid>
    </div>
    
  );
}

export default Login;