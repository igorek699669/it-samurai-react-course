import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import {ProfileContainer} from './components/Profile/ProfileContainer'
import {HeaderContainer} from './components/Header/HeaderContainer'
import {Login} from './components/Login/Login'

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
         <HeaderContainer/>
         <Navbar/>
         <div className='content'>
             <Route exact
                    path='/dialogs'
                    render={()=><DialogsContainer />}/>
             <Route path='/profile/:userId?'
                    render={()=> <ProfileContainer />}/>
             <Route exact path='/users'
                    render={()=> <UsersContainer/>}/>
             <Route exact path='/login'
                    render={()=> <Login/>}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
