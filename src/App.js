import React from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {Dialogs} from "./components/Dialogs";

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
         <Header/>
         <Navbar/>
         <div className='content'>
             <Route exact
                    path='/dialogs'
                    render={()=><Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />}/>
             <Route exact path='/profile'
                    render={()=> <Profile postsData={props.postsData}/>}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
