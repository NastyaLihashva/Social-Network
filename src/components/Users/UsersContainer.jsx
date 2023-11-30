import React from "react";
import { setCurrentPage, toggleIsFollowingProgress, getUSersThunkCreater, followThunkCreater, unfollowThunkCreater } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getPageSize, getUsersTotalCount, getIsFetching, getCurrentPage, getFollowingInProgress, getUsers } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUSers(currentPage, pageSize);    
    }

    onPageChanged = (p) =>{
        let {pageSize} = this.props;
        this.props.setCurrentPage(p);
        this.props.getUSers(p, pageSize); 
    }

    render() {
        return (
            <>
            {this.props.isFeatching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users} 
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                followThunkCreater={this.props.followThunkCreater}
                unfollowThunkCreater={this.props.unfollowThunkCreater}
                />
            </>)
    }
}


let mapStateToProps = (state) =>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFeatching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(
    connect(mapStateToProps, 
        {
            setCurrentPage,
            toggleIsFollowingProgress,
            getUSers: getUSersThunkCreater, 
            followThunkCreater, 
            unfollowThunkCreater
        }),
)(UsersContainer)

