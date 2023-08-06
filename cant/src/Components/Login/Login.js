import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import  Auth  from '../../Signin/auth';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const viewSignup = () => {
    setShowSignup(!showSignup);
  };
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setEmail("");
      setPassword("");
      alert("Password/Email Incorrect");
    }
  };

  return (
    <div className='login'>
    {showSignup ? 
      (
        <Auth/>
      ):(
        <div className='login_container'>
        <div className='login-box'>
        <h1>CAFE ARYAA</h1> 
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-button" onClick={handleLogin}>Login</button>
           <p>
                Don't have an account?{" "}
                <span>
                  <button onClick={viewSignup}>Sign up</button>
                </span>
              </p> 
          {error && <p className="login-error">{error}</p>}
        </div>
        </div>
  )}
  </div>
  );
};

export default Login;
