
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
        <NavLink to="/pokemon" className={({ isActive }) => isActive ? 'active' : ''}>Pokemon</NavLink>
      </nav>
      <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
    </header>
  );
}


// import { useContext } from 'react';
// import Navigation from '../Navigation/Navigation';
// import UserMenu from '../UserMenu/UserMenu';
// import authContext from '../../context/auth/context';
// import styles from './Appbar.module.css';

// export default function Appbar() {
//   const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

//   return (
//     <header className={styles.header}>
//       <Navigation />

//       {isLoggedIn ? (
//         <UserMenu onLogOut={onLogOut} user={user} />
//       ) : (
//         <button type="button" onClick={onLogIn}>
//           Войти
//         </button>
//       )}
//     </header>
//   );
// }