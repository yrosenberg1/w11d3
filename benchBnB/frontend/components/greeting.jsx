import React from 'react';
import { Link } from 'react-router-dom';


//Greeting
//If the user is logged in, then the Greeting should contain:

//A welcome message including the user's username
//A button to logout
//If the user is not logged in, then the Greeting should contain:

//A <Link to> /signup
//A <Link to> /login
//


const Greeting = ({currentUser, logout}) =>{
    const noUser = () => (
        < nav className='login-signup'>
          < Link to='/login'>Login</Link>  
          < Link to='/signup'> Sign up</Link>
        </nav>
    );

    const hasUser = () => (
        <div className="greeting"> 
        <p> Welcome {currentUser.username}!</p>
        <button className='greeting-button' onClick={logout}>Log Out</button>
        
        </div>
    );


   if (currentUser){
    return hasUser()}
   else {
        return noUser()
    };
   
};

export default Greeting