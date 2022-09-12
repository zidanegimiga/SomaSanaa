import React from 'react';
import Link from 'next/link';
import style from './Classes.module.scss';
import ClassCard from '../ClassCard';

const Classes = ({data}) => {
  return (
    <div className={style.ClassesSection}>
      <h2> Recently Added</h2>
      <hr className={style.horizontalLine}/>
      <div className={style.ClassesContainer}>
        {
          data?.map((lesson, index) => (
            <div key={index}>
              <ClassCard data={lesson}/>                    
            </div>
          ))
        } 
      </div>
    </div>
  )
}

export default Classes