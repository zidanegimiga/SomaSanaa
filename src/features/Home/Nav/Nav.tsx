import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "shared/Search/";
import style from "./Nav.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Nav = ({payload}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className={style.NavContainer}>
        <div className={style.navLeft}>
          <Link href="/">
            <Image width={184} height={96} src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={style.navCenter}>
          <SearchBar payload={payload}/>
        </div>
        <div className={style.navRight}>
          <div className={style.navItem}>
            <p>ABOUT US</p>
            <div className={style.underLine}></div>
          </div>
          <div className={style.navItem}>
            <p>CATEGORIES</p>
            <div className={style.underLine}></div>
          </div>
          <div className={style.navItem}>
            <p>CONTACT US</p>
            <div className={style.underLine}></div>
          </div>
        </div>
        <div className={style.menuBtn} onClick={handleClick}>
          <GiHamburgerMenu  className={style.hamburger} />
        </div>
      </div>
      {menuOpen && (
        <div className={style.MenuModal}>
          <div className={style.modalNavItem}> Home </div>
          <div className={style.modalNavItem}> Categories </div>
          <div className={style.modalNavItem}> Contact Us </div>
        </div>
      )}
    </>
  );
};

export default Nav;
