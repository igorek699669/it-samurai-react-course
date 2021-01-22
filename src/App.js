import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import {ProfileContainer} from './components/Profile/ProfileContainer'

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
             <Route path='/profile'
                    render={()=> <ProfileContainer />}/>
             <Route exact path='/users'
                    render={()=> <UsersContainer/>}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
