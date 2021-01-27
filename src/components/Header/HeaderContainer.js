import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {getAuthUserData, logout} from '../../redux/reducers/auth-reducer'

class HeaderAPIContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthUserData()
    }

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
export const HeaderContainer = connect (mapStateToProps, {getAuthUserData, logout}) (HeaderAPIContainer)