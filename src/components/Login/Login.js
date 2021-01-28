import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/auth-reducer'
import {Redirect} from 'react-router-dom'
import s from '../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <div>
                    <Field
                        name={"email"}
                        placeholder={"Email"}
                        component={Input}
                        validate={
                            [
                                required
                            ]
                        }
                    />
                </div>
                <div>
                    <Field
                        name={"password"}
                        placeholder={"Password"}
                        component={Input}
                        validate={
                            [
                                required
                            ]
                        }
                    />
                </div>
                <div>
                    <Field
                        name={"rememberMe"}
                        type={"checkbox"}
                        component={Input}
                    />
                </div>
                {props.error && (
                    <div className={s.formSummaryError}>
                        {props.error}
                    </div>
                )}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)