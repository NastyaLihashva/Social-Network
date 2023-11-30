import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import classes from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={Input}  validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} /> Remember me
            </div>
            { error && <div className={classes.form_summory_error}>
                {error}
            </div>} 
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) =>{
    const onSubmit = (formData) =>{
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={`/profile/${props.userId}`}/>
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    userId: state.auth.id
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);