import MyPosts from "./MyPosts";
import {addPostActionCreater} from '../../../redux/profile-reducer'
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;