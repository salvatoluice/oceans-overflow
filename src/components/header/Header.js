import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>
        Oceans
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink className={activeLink} to='/cart'>Cart <FaShoppingCart size={20} /><p>0</p> </NavLink>
  </span>
)

const activeLink = (
  ({isActive }) => (isActive ? `${styles.active}` : '')
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div onClick={hideMenu} className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`}></div>
            <ul onClick={hideMenu}>
              <li className={styles['logo-mobile']}>
                {logo} 
                <FaTimes size={22} color="#fff" onClick={hideMenu}/>
              </li>
              <li>
                <NavLink to='/' className={activeLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={activeLink}>Contacts</NavLink>
              </li>
            </ul>
          
       

        <div onClick={hideMenu} className={styles["header-right"]}>
          <span className={styles.links}>
            <NavLink className={activeLink} to='/login'>Login</NavLink>
            <NavLink className={activeLink} to='/register'>Register</NavLink>
            <NavLink className={activeLink} to='/order-history'>Orders</NavLink>
          </span>
          {cart}
        </div>
        </nav>
        <div className={styles["menu-icon"]}>
            {cart}
            <AiOutlineMenu onClick={toggleMenu} size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
