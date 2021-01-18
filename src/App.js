import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {DialogsContainer} from './components/Dialogs/DialogsContainer'

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
         <Header/>
         <Navbar/>
         <div className='content'>
             <Route exact
                    path='/dialogs'
                    render={()=><DialogsContainer />}/>
             <Route exact path='/profile'
                    render={()=> <Profile />}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
