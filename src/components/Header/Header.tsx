import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="bg-white" data-testid="Header">
    <header className={styles.Header + ' ' + 'container mx-auto block'}>
        <h4 className="text-2xl font-bold inline-block">UPayment Store</h4>
        <button className="btn btn-primary float-right inline-block">Register</button>
    </header>
  </div>
);

export default Header;
