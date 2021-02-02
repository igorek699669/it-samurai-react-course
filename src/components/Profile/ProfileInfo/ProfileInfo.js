import React from 'react';
import {Preloader} from '../../common/Preloader'
import {ProfileStatus} from './ProfileStatus'
import userImg from '../../../assets/images/avatar.png'
const ProfileInfo = (props) => {
    if (!props.profile){
        return  <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className='description-block'>
            <div>
                <img src={props.profile.photos.small || userImg} alt=""/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
};

export {
    ProfileInfo
}