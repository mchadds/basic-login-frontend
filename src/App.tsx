import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ProviderAPI } from './api/providerAPI/provider.api';
import { ProviderDTO } from './api/dto/providerDto/provider.dto';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputField from './components/InputField/InputField';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { LoginAPI } from './api/loginAPI/login.api';
import { red } from '@material-ui/core/colors';

const validationSchema = yup.object({
  provider: yup.number().required('Provider must be selected'),
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

const App = () => {
  const [providers, setProviders] = useState<ProviderDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const [invalidLogin, setInvalidLogin] = useState<boolean>(true);
  const [validLogin, setValidLogin] = useState<boolean>(false);
  useEffect(() => {
    // this block will run on mount

    const fetchProviders = async () => {
      setIsLoading(true);
      try {
        const response = await ProviderAPI.getAllProviders();
        setProviders(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
      }
    }

    fetchProviders();
  }, []);

  if (error) {
    return <div>{error.response?.statusText}</div>
  }

  if (isLoading) {
    <img src={logo} className="App-logo" alt="logo" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <Formik
          initialValues={{
            provider: 0,
            username: '',
            password: ''
          }}
          onSubmit={async values => {
            setInvalidLogin(true);
            setValidLogin(false);
            try {
            const response = await LoginAPI.validateLogin(values);
            setValidLogin(true);
            console.log("RESPONSE: ", response);
            } catch (error: any) {

              console.log("ERROR: ", error);

              if (error.response.status === 401) {
                setInvalidLogin(false);
                setValidLogin(false);
              }
              
            }
            alert(JSON.stringify(values, null, 2))
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <FormControl fullWidth>
                <InputLabel id="providerLbl"
                >Provider</InputLabel>
                <Select
                  id="provider"
                  name="provider"
                  label="Provider"
                  value={formik.values.provider}
                  onChange={formik.handleChange}
                  error={formik.touched.provider && Boolean(formik.errors.provider)}
                >
                  {providers?.map(provider => {
                      return (
                        <MenuItem id={'provider'} key={provider.id} value={provider.id}>
                          {provider.name}
                        </MenuItem>
                      );
                  })}
                </Select>
                {formik.touched.provider && formik.values.provider === 0 && <FormHelperText style={{ color: 'red '}}>Provider is required</FormHelperText>}
              </FormControl>
              <InputField
                name="username"
                label="Username"
              />
              <InputField
                name="password"
                label="Password"
                //type={'password'}
              />

              <Button 
                type="submit" 
                color="primary" 
                variant="contained"
                style={{marginTop: 30}}
              >
                Submit
              </Button>
              <div hidden={invalidLogin} id='invalidLoginDiv' style={{marginTop: 30, color: 'red'}}>Invalid login. Please try again</div>
              <div hidden={!validLogin} id='validLoginDiv' style={{marginTop: 30, color: 'green'}}>Success! You're in</div>
            </form>
          )}
        </Formik>

      </header>
    </div>
  );
}

export default App;
