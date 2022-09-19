import React, {useState} from 'react';
import styles from './Hero.module.scss';
import Button from 'shared/Button';
import {FaSearch} from 'react-icons/Fa';

const Hero = () => {
  const [focus, setFocus] = useState(false);

  return (
    <>      
      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Online <br/> Masterclasses <br/> for All Creatives</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.subTitle}>
           SomaSanaa has a wide array of masterclasses<br/>
           from a selection of diverse and accomplished creatives.<br/>
           Elevate yourself with one of these videos.  
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="SURPRISE ME!"/>
          <div className={styles.searchBar}>
            <form>
              <div className={styles.inputElements}>
                <input 
                  className={styles.searchBarInput}
                  placeholder={focus ? 'SEARCH BY INSTRUCTOR OR CATEGORY' : 'SEARCH'}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)} 
                />
                <button className={styles.searchBarButton} type='submit'>
                  <FaSearch />
                </button>
              </div>
            </form>          
          </div>
        </div>              
      </div>
    </>
  );
}

export default Hero