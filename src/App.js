import React from 'react';
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';
import AppHeader from './views/component/header/AppHeader';

function App() {
  React.useEffect(() => {
    console.log("Dhobighat Application Loaded Successfully");
  }, []);

  const { isAuthenticated } = useAuth0();
  let dashboard = <Button>Logged Out</Button>;

  if (isAuthenticated) {
    dashboard = <Button>Logged In</Button>;
  }

  return (
      <div>
        <AppHeader isAuthenticated={isAuthenticated}/>
        {dashboard}
      </div>
    );
  } 

export default App;