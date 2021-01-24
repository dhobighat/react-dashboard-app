import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppHeader from './views/component/header/AppHeader';
import UserDashboard from './views/component/dashboard/UserDashboard';

function App() {
  React.useEffect(() => {
    console.log("Dhobighat Application Loaded Successfully");
  }, []);

  const { isAuthenticated } = useAuth0();



  return (
      <div>
        <AppHeader isAuthenticated={isAuthenticated}/>
        <UserDashboard />
      </div>
    );
  } 

export default App;