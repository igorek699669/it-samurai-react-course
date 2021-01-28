import React from 'react';
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/reducers/profile-reducer'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
class ProfileAPIContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }


    render () {
        return (
            <Profile
                {...this.props}
                 profile={this.props.profile}
                 status = {this.props.status}
                 updateStatus = {this.props.updateUserStatus}
            />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export const ProfileContainer =
    compose (
        connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus} ),
        withRouter
    ) (ProfileAPIContainer)