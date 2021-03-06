import React from 'react';
import Greeting from './greeting';
import GreetingContainer from './greeting_container';

const App = () => (
 <div>
    <header>      
         <h1>Bench BnB</h1>
         < GreetingContainer />
      </header>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App