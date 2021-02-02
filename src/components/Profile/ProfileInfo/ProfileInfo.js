import React, {useState} from 'react'
import {Preloader} from '../../common/Preloader'
import {ProfileStatus} from './ProfileStatus'
import s from './index.module.css'
import userImg from '../../../assets/images/avatar.png'
import {ProfileDataFormRedux} from './ProfileDataForm'

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=> {
            setEditMode(false)
        })
    }
    return (
        <div className='description-block'>
            <div>
                <img src={props.profile.photos.small || userImg} alt=""/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataFormRedux
                        initialValues={props.profile}
                        profile={props.profile}
                        isOwner={props.isOwner}
                        onSubmit={onSubmit}
                      />
                    : <ProfileData
                        isOwner={props.isOwner}
                        profile={props.profile}
                        goToEditMode={() => setEditMode(true)}
                    />
                }

                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>
            {contactValue}
        </div>
    )
}
const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.goToEditMode}>edit mode</button>}
            <div><b>Full name:</b> {props.profile.fullName}</div>
            <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {props.profile.lookingForAJobDescription}
            </div>
            }
            <div><b>About me:</b> {props.profile.aboutMe}</div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</div>
        </div>
    )
}

export {
    ProfileInfo
}