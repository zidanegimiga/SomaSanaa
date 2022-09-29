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
        <Image alt='Thumbnail' src={data.poster === "" ? imgCard : data.poster} width={566} height={271}/>
      </div>
      <div className={style.cardDescription}>
        <Link 
          href={`/?lesson=${data.id}`}
          as={`/masterclass/${data.id}`}>
          <h4>{data?.title}</h4>
        </Link>
        <h5>{data?.instructor}</h5>
        <p>{useTruncate(data?.description, 120)}</p>
      </div>
    </div>
  )
}

export default ClassCard;