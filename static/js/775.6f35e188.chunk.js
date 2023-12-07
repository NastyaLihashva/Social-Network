"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[775],{4775:function(t,e,s){s.r(e),s.d(e,{default:function(){return Q}});var n=s(5671),o=s(3144),i=s(136),r=s(516),a=s(8683),l=s(2791),u="Profile_content__emg7A",c=s(9439),d="ProfileInfo_description__6F-0C",p="ProfileInfo_info__S7AGT",h="ProfileInfo_status__XnFHB",f="ProfileInfo_name__NzMz1",x="ProfileInfo_text__Ow0ZD",j="ProfileInfo_input__kzXLy",m="ProfileInfo_photo_block__uirWP",v="ProfileInfo_inputFile__oKqkt",_="ProfileInfo_contacts__66wVm",g=s(184),k=function(t){(0,i.Z)(s,t);var e=(0,r.Z)(s);function s(){var t;(0,n.Z)(this,s);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(e){t.setState({status:e.currentTarget.value})},t}return(0,o.Z)(s,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,g.jsx)("div",{className:h,children:this.state.editMode?(0,g.jsx)("div",{children:(0,g.jsx)("input",{onChange:this.onStatusChange,className:j,autoFocus:!0,onBlur:this.deactivateEditMode,type:"text",value:this.state.status})}):(0,g.jsx)("div",{children:(0,g.jsx)("span",{className:x,onDoubleClick:this.activateEditMode,children:this.props.status||"----"})})})}}]),s}(l.Component),P=k,b=s(6139),Z=s(704),y=s(7492),C=s(9234),S=(0,Z.Z)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,n=t.error;return console.log(n),(0,g.jsxs)("form",{onSubmit:e,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Full name: "}),(0,g.jsx)(b.Z,{placeholder:"Full name",name:"fullName",component:y.I,validate:[]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job: "}),(0,g.jsx)(b.Z,{placeholder:"",name:"lookingForAJob",component:y.I,validate:[],type:"checkbox"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My professional skills: "}),(0,g.jsx)(b.Z,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:y.g,validate:[]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About me: "}),(0,g.jsx)(b.Z,{placeholder:"About me",name:"aboutMe",component:y.g,validate:[]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts: "}),(0,g.jsx)("div",{className:_,children:Object.keys(s.contacts).map((function(t){return(0,g.jsxs)("div",{children:[" ",t,":",(0,g.jsx)(b.Z,{placeholder:"Full name",name:"contacts."+t,component:y.I,validate:[]})]},t)}))})]}),(0,g.jsx)("button",{children:"Save changes"}),n&&(0,g.jsx)("div",{className:C.Z.form_summory_error,children:n})]})})),I=function(t){var e=t.contactTitle,s=t.contactValue;return(0,g.jsxs)("div",{children:[e,": ",s]})},M=function(t){var e=t.profile,s=t.isOwner,n=t.onEditMode;return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job: "}),e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My professional skills: "}),e.lookingForAJobDescription]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"About me: "}),e.aboutMe]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts: "}),(0,g.jsx)("div",{className:_,children:Object.keys(e.contacts).map((function(t){return(0,g.jsx)(I,{contactTitle:t,contactValue:e.contacts[t]})}))})]}),s&&(0,g.jsx)("button",{onClick:n,children:"Edit profile"})]})},N=function(t){var e=t.profile,s=t.status,n=t.updateStatus,o=t.isOwner,i=t.savePhoto,r=t.saveProfile,a=(0,l.useState)(!1),u=(0,c.Z)(a,2),h=u[0],x=u[1];if(!e)return(0,g.jsx)("div",{});return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)("div",{className:m,children:[e.photos.large?(0,g.jsx)("img",{src:e.photos.large,alt:"avatar"}):(0,g.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53133.png",alt:"avatar"}),o&&(0,g.jsx)("input",{className:v,type:"file",onChange:function(t){t.target.files.length&&i(t.target.files[0])}})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("div",{className:f,children:e.fullName}),(0,g.jsx)(P,{status:s,updateStatus:n}),h?(0,g.jsx)(S,{initialValues:e,profile:e,onSubmit:function(t){r(t).then((function(){x(!1)})).catch((function(){}))}}):(0,g.jsx)(M,{profile:e,isOwner:o,onEditMode:function(){return x(!0)}})]})]})})},w="MyPosts_posts__7ozE3",T="MyPosts_line__5QmIi",A="MyPosts_new_post__DFnlf",D="Post_item__ukdeU",F="Post_text__KTpaE",E=function(t){return(0,g.jsxs)("div",{className:D,children:[(0,g.jsxs)("div",{className:F,children:[(0,g.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53133.png",alt:"avatar"}),t.message]}),(0,g.jsx)("div",{children:(0,g.jsxs)("span",{children:["like ",t.likesCount]})})]})},O=s(5304),U=(0,O.D)(10),J=l.memo((function(t){var e=t.postsData.map((function(t){return(0,g.jsx)(E,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{className:T}),(0,g.jsx)("h2",{children:"My posts"}),(0,g.jsx)(z,{onSubmit:function(e){t.addPost(e.newPostText)}}),(0,g.jsx)("div",{className:w,children:e})]})})),z=(0,Z.Z)({form:"addNewPost"})((function(t){return(0,g.jsxs)("form",{onSubmit:t.handleSubmit,className:A,children:[(0,g.jsx)("div",{children:(0,g.jsx)(b.Z,{component:y.g,name:"newPostText",validate:[O.C,U],id:"",cols:"30",rows:"3",placeholder:"Enter your post"})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"new post"})})]})})),V=J,L=s(6070),X=s(8687),$=(0,X.$j)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t((0,L.t2)(e))}}}))(V),q=function(t){return(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)(N,(0,a.Z)({},t)),(0,g.jsx)($,{})]})},B=s(7689),H=s(1103),K=s(7781);var G=function(t){(0,i.Z)(s,t);var e=(0,r.Z)(s);function s(){return(0,n.Z)(this,s),e.apply(this,arguments)}return(0,o.Z)(s,[{key:"updateProfile",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authUserId),this.props.getProfileThunkCreater(t),this.props.getStatusThunkCreater(t)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.router.params.userId!==t.router.params.userId&&this.updateProfile()}},{key:"render",value:function(){return(0,g.jsx)(q,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreater,isOwner:this.props.router.params.userId==this.props.authUserId,savePhoto:this.props.savePhoto}))}}]),s}(l.Component),Q=(0,K.qC)((0,X.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getProfileThunkCreater:L.JU,getStatusThunkCreater:L.Th,updateStatusThunkCreater:L.X6,savePhoto:L.Ju,saveProfile:L.Ii}),(function(t){return function(e){var s=(0,B.TH)(),n=(0,B.s0)(),o=(0,B.UO)();return(0,g.jsx)(t,(0,a.Z)((0,a.Z)({},e),{},{router:{location:s,navigate:n,params:o}}))}}),H.D)(G)},1103:function(t,e,s){s.d(e,{D:function(){return p}});var n=s(8683),o=s(5671),i=s(3144),r=s(136),a=s(516),l=s(2791),u=s(7689),c=s(8687),d=s(184),p=function(t){var e=function(e){(0,r.Z)(l,e);var s=(0,a.Z)(l);function l(){return(0,o.Z)(this,l),s.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)((function(t){return{isAuth:t.auth.isAuth}}))(e)}}}]);
//# sourceMappingURL=775.6f35e188.chunk.js.map