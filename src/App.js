import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer'
import {ProfileContainer} from './components/Profile/ProfileContainer'
import {HeaderContainer} from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/reducers/app-reducer'
import {Preloader} from './components/common/Preloader'

class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) return <Preloader/>
        return (
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
        );
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
    )(App);
