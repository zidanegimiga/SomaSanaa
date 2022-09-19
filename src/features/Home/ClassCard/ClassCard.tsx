import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imgCard from '../../../../public/CardImage.png';
import style from './ClassCard.module.scss';

const ClassCard = ({data}) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardHeader}>
        <Image alt='Thumbnail' src={imgCard} width={566} height={353}/>
      </div>
      <div className={style.cardDescription}>
      <Link 
        href={`/?lesson=${data.id}`}
        as={`/masterclass/${data.id}`}>
        <h4>{data?.title}</h4>
      </Link>
        <h5>{data?.author}</h5>
        <p>{data?.description}</p>
      </div>
    </div>
  )
}

export default ClassCard;