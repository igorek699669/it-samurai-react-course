import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {Dialogs} from "./components/Dialogs";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
         <Header/>
         <Navbar/>
         <div className='content'>
             <Route exact path='/dialogs' component={Dialogs}/>
             <Route exact path='/profile' component={Profile}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
