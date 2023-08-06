import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Login from '../Components/Login/Login';
import "./auth.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSignedIn(true); 
    } catch (err) {
      const errorCode = err.code;
      if (errorCode === "auth/email-already-in-use") {
        setEmail("");
        setPassword("");
        alert("User with the same email already exists");
      } else {
        console.log(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsSignedIn(true); 
    } catch (err) {
      if (err.code === "auth/account-exists-with-different-credential") {
        alert("An account with the same email already exists. Try signing in with the other provider.");
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className='auth-container1'>
      {isSignedIn ? (
        <div>
          <Login/>
          
        </div>
      ) : (
        <div className='auth-container'>
          {showSignup ? (
            <div className='auth-signup'>
              <form className='auth-form'>
                <h1>CAFE ARYAA</h1> *
                <div>
                  <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='email' value={email} required />
                  <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} className='password' value={password} required />
                  <button type='submit' onClick={signIn} className='signup-button'>Sign up</button>
                  <p className='OR'>or</p>
                  <button onClick={signInWithGoogle} className='signupwithgoogle-button'>Sign in With Google</button>
                  
                  <p>
                    Already have an account?{" "}
                    <span>
                      <button onClick={toggleSignup}>Login</button>
                    </span>
                  </p>
                </div>
              </form>
             
            </div >
            
          ) : (
            <div className='auth-login'>
              <Login />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Auth;