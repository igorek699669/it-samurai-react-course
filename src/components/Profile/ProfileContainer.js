import React from 'react';
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/reducers/profile-reducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import {compose} from 'redux'
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
    compose (
        connect(mapStateToProps, {getUserProfile} ),
        withRouter,
        withAuthRedirect
    ) (ProfileAPIContainer)