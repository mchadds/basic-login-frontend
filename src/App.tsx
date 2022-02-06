import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AxiosError } from 'axios';
import { ProviderAPI } from './api/providerAPI/provider.api';
import { ProviderDTO } from './api/dto/providerDto/provider.dto';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import InputField from './components/InputField/InputField';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { LoginAPI } from './api/loginAPI/login.api';

// schema validation for formik form
const validationSchema = yup.object({
  providerId: yup.number().required('Provider must be selected'),
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

const App = () => {
  // insurance providers for the drop down selection
  const [providers, setProviders] = useState<ProviderDTO[]>([]);
  // while retrieving data from api (if it was ever not local)
  const [isLoading, setIsLoading] = useState(false);
  // unable to load insurance providers
  const [error, setError] = useState<AxiosError>();

  // if user successfully logs in
  const [invalidLogin, setInvalidLogin] = useState<boolean>(true);
  // if user attempts an invalid login
  const [validLogin, setValidLogin] = useState<boolean>(false);
  useEffect(() => {
    // this block will run on mount
    const fetchProviders = async () => {
      setIsLoading(true);
      try {
        // retrieve insurance providers from endpoint
        const response = await ProviderAPI.getAllProviders();
        setProviders(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
      }
    }

    fetchProviders();
  }, []);

  if (isLoading) {
    <img src={logo} className="App-logo" alt="logo" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <Formik
          initialValues={{
            providerId: 0,
            username: '',
            password: '' 
          }}
          onSubmit={async values => {
            setInvalidLogin(true);
            setValidLogin(false);
            try {
            await LoginAPI.validateLogin(values);
            setValidLogin(true);

            } catch (error: any) {
              if (error.response.status === 401) {
                setInvalidLogin(false);
                setValidLogin(false);
              }
            }
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <form style={{ backgroundColor: 'lightblue' }} onSubmit={formik.handleSubmit}>
              <FormControl fullWidth>
                <InputLabel style={{ fontSize: 22 }}id="providerLbl"
                >Provider</InputLabel>
                <Select
                  id="providerId"
                  name="providerId"
                  label="Provider"
                  value={formik.values.providerId}
                  onChange={formik.handleChange}
                  error={formik.touched.providerId && Boolean(formik.errors.providerId)}
                >
                  {providers?.map(provider => {
                      return (
                        <MenuItem id={'provider'} key={provider.id} value={provider.id}>
                          {provider.name}
                        </MenuItem>
                      );
                  })}
                </Select>
                {formik.touched.providerId && formik.values.providerId === 0 && <FormHelperText style={{ color: 'red '}}>Provider is required</FormHelperText>}
              </FormControl>
              <InputField
                name="username"
                label="Username"
              />
              <InputField
                name="password"
                label="Password"
                type={'password'}
              />

              <Button 
                type="submit" 
                color="primary" 
                variant="contained"
                style={{marginTop: 30, marginBottom: 10}}
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
