"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[934],{591:function(t,s,e){e.r(s),e.d(s,{default:function(){return L}});var n=e(5671),a=e(3144),r=e(136),i=e(516),o=e(8683),u=e(2791),c="Profile_content__emg7A",l="ProfileInfo_background__78SLa",d="ProfileInfo_description__6F-0C",p="ProfileInfo_info__S7AGT",h="ProfileInfo_status__XnFHB",f="ProfileInfo_name__NzMz1",m="ProfileInfo_text__Ow0ZD",v="ProfileInfo_input__kzXLy",x=e(184),_=function(t){(0,r.Z)(e,t);var s=(0,i.Z)(e);function e(){var t;(0,n.Z)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=s.call.apply(s,[this].concat(r))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(s){t.setState({status:s.currentTarget.value})},t}return(0,a.Z)(e,[{key:"componentDidUpdate",value:function(t,s){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,x.jsx)("div",{className:h,children:this.state.editMode?(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:this.onStatusChange,className:v,autoFocus:!0,onBlur:this.deactivateEditMode,type:"text",value:this.state.status})}):(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:m,onDoubleClick:this.activateEditMode,children:this.props.status||"----"})})})}}]),e}(u.Component),j=_,g=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:l,children:(0,x.jsx)("img",{src:"https://kudann.ru/uploads/af315a318da415860ee72551a830a06f.png",alt:"img"})}),(0,x.jsxs)("div",{className:d,children:[s.photos.small?(0,x.jsx)("img",{src:s.photos.small,alt:"avatar"}):(0,x.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53133.png",alt:"avatar"}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("div",{className:f,children:s.fullName}),(0,x.jsx)(j,{status:e,updateStatus:n})]})]})]}):(0,x.jsx)("div",{})},k="MyPosts_posts__7ozE3",P="MyPosts_line__5QmIi",C="MyPosts_new_post__DFnlf",Z="Post_item__ukdeU",S="Post_text__KTpaE",y=function(t){return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53133.png",alt:"avatar"}),t.message]}),(0,x.jsx)("div",{children:(0,x.jsxs)("span",{children:["like ",t.likesCount]})})]})},N=e(6139),T=e(704),w=e(5304),M=e(7492),D=(0,w.D)(10),I=u.memo((function(t){var s=t.postsData.map((function(t){return(0,x.jsx)(y,{message:t.message,likesCount:t.likesCount})}));return(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:P}),(0,x.jsx)("h2",{children:"My posts"}),(0,x.jsx)(b,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,x.jsx)("div",{className:k,children:s})]})})),b=(0,T.Z)({form:"addNewPost"})((function(t){return(0,x.jsxs)("form",{onSubmit:t.handleSubmit,className:C,children:[(0,x.jsx)("div",{children:(0,x.jsx)(N.Z,{component:M.g,name:"newPostText",validate:[w.C,D],id:"",cols:"30",rows:"3",placeholder:"Enter your post"})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"new post"})})]})})),A=I,E=e(6070),U=e(8687),F=(0,U.$j)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,E.t2)(s))}}}))(A),z=function(t){return(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)(g,(0,o.Z)({},t)),(0,x.jsx)(F,{})]})},X=e(7689),$=e(1103),B=e(7781);var H=function(t){(0,r.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,a.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authUserId),this.props.getProfileThunkCreater(t),this.props.getStatusThunkCreater(t)}},{key:"render",value:function(){return(0,x.jsx)(z,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreater}))}}]),e}(u.Component),L=(0,B.qC)((0,U.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getProfileThunkCreater:E.JU,getStatusThunkCreater:E.Th,updateStatusThunkCreater:E.X6}),(function(t){return function(s){var e=(0,X.TH)(),n=(0,X.s0)(),a=(0,X.UO)();return(0,x.jsx)(t,(0,o.Z)((0,o.Z)({},s),{},{router:{location:e,navigate:n,params:a}}))}}),$.D)(H)},1103:function(t,s,e){e.d(s,{D:function(){return p}});var n=e(8683),a=e(5671),r=e(3144),i=e(136),o=e(516),u=e(2791),c=e(7689),l=e(8687),d=e(184),p=function(t){var s=function(s){(0,i.Z)(u,s);var e=(0,o.Z)(u);function u(){return(0,a.Z)(this,u),e.apply(this,arguments)}return(0,r.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)((function(t){return{isAuth:t.auth.isAuth}}))(s)}}}]);
//# sourceMappingURL=934.4c809fa8.chunk.js.map