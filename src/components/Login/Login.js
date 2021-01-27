import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'


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
                    <Field
                        name={"login"}
                        placeholder={"Login"}
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