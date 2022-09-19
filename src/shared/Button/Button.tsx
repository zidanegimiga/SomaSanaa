import React from 'react';
import styles from './Button.module.scss';

const Button = ({text}) => {
  return (
    <div className={styles.buttonContainer}>
        {text}
    </div>
  )
}

export default Button