import React from 'react'
import {Field, reduxForm} from 'redux-form'
import s from './index.module.css'
import {Input, Textarea} from '../../common/FormsControls/FormsControls'

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.isOwner &&
                <button>save</button>
            }
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div> }
            <div>
                <b>Full name:</b>
                <Field
                    placeholder={'name'}
                    name={'fullName'}
                    component={Input}
                />
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field
                    name={'lookingForAJob'}
                    component={Input}
                    type={'checkbox'}
                />
            </div>
            <div>
                <b>My professional skills:</b>
                <Field
                    name={'lookingForAJobDescription'}
                    placeholder={'my professional skills'}
                    component={Textarea}
                />
            </div>
            <div>
                <b>About me:</b>
                <Field
                    name={'aboutMe'}
                    placeholder={'about me'}
                    component={Textarea}
                />
            </div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}</b>
                    <Field
                        name={'contacts.' + key}
                        placeholder={key}
                        component={Input}

                    />
                </div>
            })}</div>
        </form>
    )
}
const ProfileDataFormRedux = reduxForm({form: 'editProfile'})(ProfileDataForm)
export {
    ProfileDataFormRedux
}