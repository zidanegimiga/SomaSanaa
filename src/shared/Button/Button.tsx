import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, action}) => {
  return (
    <button 
      className={styles.buttonContainer}
      onClick={action}
    >
        {text}
    </button>
  )
}

export default Button