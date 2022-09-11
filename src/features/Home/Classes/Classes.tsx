import React from 'react';
import style from './Classes.module.scss';
import ClassCard from '../ClassCard';
import { cardData } from '../ClassCard/cardDescription';

const Classes = () => {
  return (
    <div className={style.ClassesSection}>
      <h2> Recently Added</h2>
      <hr className={style.horizontalLine}/>
      <div className={style.ClassesContainer}>
        {
          cardData.map((card, index) => (
            <ClassCard data={card} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Classes