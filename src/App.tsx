import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


const PROVIDERS_ENDPOINT = 'http://localhost:3000/providers';
//TODO inteface for providers so useState is not any
function App() {
  const [providers, setProviders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    // this block will run on mount
    
    const fetchProviders = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(PROVIDERS_ENDPOINT);
        setProviders(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
      }
      
    }

    fetchProviders();
  }, []);

  if (error) {
    return <div>Sorry something went wrong!</div>
  }

  if (isLoading) {
    <img src={logo} className="App-logo" alt="logo" />
  }

  return (
    <div className="App">
      <header className="App-header">
          {providers.map((provider) => (
          <div>
            <div>{provider.name}</div><div>{provider.id}</div>
          </div> 
          ))}        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
