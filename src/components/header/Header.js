import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import { FaShoppingCart } from 'react-icons/fa'

const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>
        Oceans
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className={styles["header-right"]}>
          <span className={styles.links}>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/order-history'>Orders</Link>
          </span>
          <span className={styles.cart}>
            <Link to='/cart'>Cart <FaShoppingCart size={20} /><p>0</p> </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
