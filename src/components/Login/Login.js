import React from 'react'
import {Field, reduxForm} from 'redux-form'


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
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
                    <Field name={"login"} placeholder={"Login"} component={'input'}/>
                </div>
                <div>
                    <Field name={"password"} placeholder={"Password"} component={'input'}/>
                </div>
                <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={'input'}/>
                </div>
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
export {
    Login
}