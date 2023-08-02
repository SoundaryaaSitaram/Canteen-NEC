import './App.css';
import { Header } from './Components/Header/Header';
import { Menu } from './Components/Menu/Menu';
import { Contact } from './Components/Contact/Contact';
import { MyCart } from './Components/MyCart/MyCart';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Auth } from './Components/auth';
import {db} from './config/firebase';
import {collection, getDocs} from 'firebase/firestore';
import Login from './Components/Login';
import { auth } from './config/firebase';

// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state={apiResponse:""};
//   }
//   callAPI()
//   {
//     fetch("http://localhost:9000/testAPI")
//       .then(res=>res.text())
//       .then(res=>res.setState({apiResponse:res}));
//   }

//   componentDidMount()
//   {
//     this.callAPI();
//   }

// render() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Menu />
//         <Contact />
//         <Routes>
//           <Route path="/mycart" element={<MyCart />} />
//         </Routes>
//         <p>this.state.apiResponse</p>
//       </div>
//     </Router>
//   );
// }
// }
 function App() {
  const [user, setUser] = useState(null);
  const [ordersList,SetOrdersList]=useState([]);

  const orderCollection = collection(db,"orders");

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);


  useEffect(()=>{
    const getOrdersList=async()=>{
      try{
      const data=await getDocs(orderCollection);
      const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}));
      SetOrdersList(filteredData);
     // console.log(data);
      }
      catch(err)
      {
        console.error(err);
      }
    };
    getOrdersList();
  },[])
  return (
    // <Router>
    // <div className="App">
    //   <Header/>
    //   <Menu/>
    //   <Contact/>
    //   <Routes>
    //       <Route path="/MyCart" element={<MyCart />} />
    //   </Routes>

    // </div>
    // </Router>
    <div>
      {/* <Auth/> */}
      {user ? (
        
      <div>
        <Router>
        <div className="App">
        <Header/>
         <Menu/>
        <Contact/>
        <Routes>
         <Route path="/MyCart" element={<MyCart />} />
        </Routes>
    
        </div>
        </Router>
        {ordersList.map((order)=>(

          <div key={order.id}>
          <h1>{order.id}</h1>
          <p> {order.Items}</p>
          <p>{order.Date}</p>
          </div>
        ))}
      </div>
       ) : (
        // Show login page when the user is not logged in
        <Login />
      )}
    </div>
    
  );
}


export default App;
