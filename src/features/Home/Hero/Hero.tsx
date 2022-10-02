import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Fuse from "fuse.js";
import Button from "shared/Button";
import styles from "./Hero.module.scss";
import { FaSearch } from "react-icons/fa";

const Hero = ({payload}) => {
  const router = useRouter();

  function handleBlur() {}

  /** Routes user to random video page */
  function randomVideo(e) {
    e.preventDefault();
    const randomId = Math.ceil(Math.random() * 10) - 1;
    const randomVideo = payload[randomId];
    router.push(`/masterclass/${randomVideo.id}`);
  }

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Online <br /> Masterclasses <br /> for All <span>Creatives</span>
          </h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.subTitle}>
          SomaSanaa has a wide array of masterclasses from a selection of diverse and accomplished creatives. Elevate yourself with one of these videos.
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="SURPRISE ME!" action={randomVideo} />
          <div className={styles.searchBar}>            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
