import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/reducers/auth-reducer'

class HeaderAPIContainer extends React.Component{



    render () {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export const HeaderContainer = connect (mapStateToProps, {logout}) (HeaderAPIContainer)