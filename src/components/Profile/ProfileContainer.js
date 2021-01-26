import React from 'react';
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/reducers/profile-reducer'
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../hoc/withAuthRedirect'
class ProfileAPIContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=2
        }
        this.props.getUserProfile(userId)
    }


    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer =
    connect(mapStateToProps, {getUserProfile} )
(withAuthRedirect (withRouter (ProfileAPIContainer) ))