import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosPerson } from 'react-icons/io';
import classes from './Navigation.module.css';

function Navigation() {
  const [bookStyle, setBookStyle] = useState({});
  const [hideMenu, setHideMenu] = useState(false);
  const location = useLocation();
  const [categoriesStyle, setcategoriesStyle] = useState({});
  useEffect(() => {
    setBookStyle({ color: 'black', textDecoration: 'underline' });
    if (location.pathname === '/Categories') {
      setcategoriesStyle({
        color: 'black', textDecoration: 'underline',
      });
      setBookStyle({});
    }
  }, []);
  const onClick = (e) => {
    if ((e.target.innerText === 'Books')) {
      setBookStyle({
        color: 'black', textDecoration: 'underline',
      });
      setcategoriesStyle({});
    } else {
      setcategoriesStyle({
        color: 'black', textDecoration: 'underline',
      });
      setBookStyle({});
    }
  };
  const logoClickHandle = () => {
    setBookStyle({
      color: 'black', textDecoration: 'underline',
    });
    setcategoriesStyle({});
  };

  const menuClickHnadler = () => {
    setHideMenu(!hideMenu);
  };
  return (
    <div className={classes.navigation}>
      <ul className={classes.ul}>
        <Link to="/" onClick={logoClickHandle}><h2 className={classes.h2}>Bookstore CMS</h2></Link>
        <div className={classes.mobile}>
          <FiMenu className={classes.hide} onClick={menuClickHnadler} />
        </div>
        <Link to="/" className={classes.desktopStuf} style={bookStyle} onClick={onClick}>Books</Link>
        <Link to="/Categories" className={classes.desktopStuf} style={categoriesStyle} onClick={onClick}>Categories</Link>
        <div className={classes.personDesktop}>
          <IoIosPerson className={classes.personIcon} />
        </div>
      </ul>
      <div className={!hideMenu ? classes.hideMenu : classes.menu}>
        <div className={classes.person}>
          <IoIosPerson className={classes.personIcon} />
        </div>
        <Link to="/" style={bookStyle} onClick={onClick}>Books</Link>
        <Link to="/Categories" style={categoriesStyle} onClick={onClick}>Categories</Link>
      </div>
    </div>
  );
}

export default Navigation;
