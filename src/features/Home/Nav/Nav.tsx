import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import style from './Nav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () =>{
    if(!menuOpen){
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className={style.NavContainer}>
        <Link href="/" > <p>SomaSanaa</p> </Link>        
        <div className={style.menuBtn} onClick={handleClick}>
          <GiHamburgerMenu  className={style.hamburger} />
        </div>        
      </div>
      {
        menuOpen && (
            <div className={style.MenuModal}>
              <div className={style.NavItem}> Home </div>
              <div className={style.NavItem}> Categories </div>
              <div className={style.NavItem}> Contact Us </div>
            </div>
        )
      } 
    </>
  );
}

export default Nav;