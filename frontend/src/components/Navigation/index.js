import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from '../../assets/logo.png'



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  const handleClick =() =>{
    history.replace('/signup')
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
      <ProfileButton user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal  />
        <button className='navbarbuttons-Li-Su' onClick={handleClick}>Sign Up</button>
      </>
    );
  }

  return (
    <div className='navBar' >
      <div className='navLeft'>
        <NavLink exact to="/"><a href=""><img className='logo' src={logo} alt=""/></a></NavLink>
      </div>
        <div className='navMiddle'>
        <NavLink className='navButton' to='/add-chair'>Add a Chair</NavLink>
        <NavLink className='navButton' to='/my-bookings'>Check Bookings</NavLink>
        </div>
      <div className='navRight'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
