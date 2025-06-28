import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Forma
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Color Picker
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Counter
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Clock
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Pokemon
    </NavLink>
  </nav>
);

export default Navigation;