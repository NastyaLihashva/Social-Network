import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreater, getStatusThunkCreater, updateStatusThunkCreater, savePhoto, saveProfile } from '../../redux/profile-reducer';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {
    updateProfile() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.authUserId;
        }
        this.props.getProfileThunkCreater(userId);
        this.props.getStatusThunkCreater(userId);
    }

    componentDidMount(){
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.router.params.userId !== prevProps.router.params.userId){
            this.updateProfile();
        }
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
                updateStatus={this.props.updateStatusThunkCreater} 
                isOwner={this.props.router.params.userId == this.props.authUserId}
                savePhoto={this.props.savePhoto}/>
        );
    }
}


let mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status, 
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getProfileThunkCreater, getStatusThunkCreater, updateStatusThunkCreater, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);