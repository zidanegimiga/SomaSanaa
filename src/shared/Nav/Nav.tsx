/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "shared/Search/";
import style from "./Nav.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Nav = (props) => {
  const {payload} = props
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
            <Image width={180} height={90} src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={style.navCenter}>
          <SearchBar payload={payload}/>
        </div>
        <div className={style.navRight}>
          <div className={style.navItem}>
            <Link href="/about"><p>ABOUT US</p></Link>
            <div className={style.underLine}></div>
          </div>
          <div className={style.navItem}>
            <a href="/#contact">CONTACT US</a>
            <div className={style.underLine}></div>
          </div>
        </div>
        <div className={style.menuBtn} onClick={handleClick}>
          <GiHamburgerMenu  className={style.hamburger} />
        </div>
      </div>
      {menuOpen && (
        <div className={style.MenuModal}>
          <Link href="/"><div className={style.modalNavItem}>Home</div></Link>
          <Link href="/about"><div className={style.modalNavItem}> About us</div></Link>
          <Link href="/about/#contact"><div className={style.modalNavItem}>Contact us</div></Link>
        </div>
      )}
    </>
  );
};

export default Nav;
