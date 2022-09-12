import React from 'react';
import style from './WatchButton.module.scss'

const WatchButton = () => {
  return (
    <div className={style.buttonWrapper}>
      <div className={style.playIcon}></div>
      <p> Watch now</p>
    </div>
  );
}

export default WatchButton;