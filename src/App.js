import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeAppThunkCreater } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component{
  componentDidMount(){
    this.props.initializeAppThunkCreater();
  }

  render(){
    if(!this.props.initialized){
      return (
        <Preloader />
      )
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
          <React.Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/news" Component={ProfileContainer} />
              <Route path="/music" Component={ProfileContainer} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" Component={ProfileContainer} />
              <Route path="/login" element={<Login />} />
            </Routes>
            </React.Suspense>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeAppThunkCreater})(App);

const SocialApp = (props) =>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialApp;