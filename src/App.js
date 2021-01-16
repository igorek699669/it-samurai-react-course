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
                    render={()=><Dialogs
                        dialogsData={props.appState.dialogsPage.dialogsData}
                        messageData={props.appState.dialogsPage.messageData} />}/>
             <Route exact path='/profile'
                    render={()=> <Profile
                        dispatch={props.dispatch}
                        postsData={props.appState.profilePage.postsData}
                        newPostText={props.appState.profilePage.newPostText}
                    />}/>
         </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
