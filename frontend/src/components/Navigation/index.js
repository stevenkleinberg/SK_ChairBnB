import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from '../../assets/logo.png'



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
        <LoginFormModal className='navButton' />
        <NavLink className='navButton' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navBar' >
        <NavLink exact to="/"><a href=""><img className='logo' src={logo} alt=""/></a></NavLink>
        <div className='navMiddle'>
        <NavLink className='navButton' to='/add-chair'>Add a Chair</NavLink>
        <NavLink className='navButton' to='/add-chair'>Check Bookings</NavLink>
        <NavLink className='navButton' to='/add-chair'>mabye another one</NavLink>
        </div>
      <div className='NavRight'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
