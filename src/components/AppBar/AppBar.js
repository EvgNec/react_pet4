
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export default function Appbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <nav>
      <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink> |{' '}
        <NavLink to="/colorpicker" className={({ isActive }) => isActive ? 'active' : ''}>Color Picker</NavLink> |{' '}
        <NavLink to="/counter" className={({ isActive }) => isActive ? 'active' : ''}>Counter</NavLink> |{' '}
        <NavLink to="/clock" className={({ isActive }) => isActive ? 'active' : ''}>Clock</NavLink> |{' '}
        <NavLink to="/pokemon" className={({ isActive }) => isActive ? 'active' : ''}>Pokemon</NavLink>|{' '}
        <NavLink to="/phoneBook" className={({ isActive }) => isActive ? 'active' : ''}>PhoneBook</NavLink>|{' '}
        <NavLink to="/feedbackClass" className={({ isActive }) => isActive ? 'active' : ''}>FeedbackClass</NavLink>|{' '} 
        <NavLink to="/feedbackHook" className={({ isActive }) => isActive ? 'active' : ''}>FeedbackHook</NavLink>|{' '}
        <NavLink to="/TestContent" className={({ isActive }) => isActive ? 'active' : ''}>TestContent</NavLink>           
      </nav>
      <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
    </header>
  );
}

