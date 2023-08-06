import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Menu } from './Components/Menu/Menu';
import { Contact } from './Components/Contact/Contact';
import { Auth } from './Signin/auth';
import { auth } from './config/firebase';
import OrderList from './Components/OrdersList/OrdersList';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  

  return (
    
    <div>
      {user ? (
        <div>
          <Router>
            <div className="App">
              <Header />
              <Menu />
              <OrderList/>
              <Contact />
            </div>
          </Router>
        </div>
      ) : (
        <Router>
          <Auth user={user}/>
        </Router>
      )}
    </div>
  );
}

export default App;