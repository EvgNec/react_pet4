import React from 'react';
import css from './Conrainer.module.css'

const Container = ({ children }) => <div className={css.Container}>{children}</div>;

export default Container;