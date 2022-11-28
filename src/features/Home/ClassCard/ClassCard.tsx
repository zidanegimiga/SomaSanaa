import React from 'react';
import { useTruncate } from 'shared/Utilities';
import Image from 'next/image';
import Link from 'next/link';
import imgCard from '../../../../public/CardImage.png';
import style from './ClassCard.module.scss';

const ClassCard = ({data}) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardHeader}>
        <Link  
          href={`/masterclass/${data.id}`}
        >
          <Image alt='Thumbnail' src={data.poster === "" ? imgCard : data.poster} width={700} height={350}/>
        </Link>
      </div>
      <div className={style.cardDescription}>
        <Link 
          href={`/masterclass/${data.id}`}
        >
          <h4>{data?.title}</h4>
        </Link>
        <h5>{data?.instructor}</h5>
        <p>Category: {data?.category}</p>
        <p>{useTruncate(data?.description, 120)}</p>
      </div>
    </div>
  )
}

export default ClassCard;
