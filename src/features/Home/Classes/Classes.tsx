import React, { useState } from "react";
import Link from "next/link";
import style from "./Classes.module.scss";
import ClassCard from "../ClassCard";

interface payLoadProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  youtubeEmbedID: string;
  poster: string;
  category: string;
  new?: boolean;
}

interface classesProps {
  data: payLoadProps[];
  category?: string;
  categoryTitle: string;
}

const Classes = ({ data, category, categoryTitle }: classesProps) => {
  const classPerView = 3;
  /**
   * logic for the see more button
   */
  const [next, setNext] = useState(classPerView);
  const seeMore = () => {
    setNext(next + classPerView);
  };

  /**
   * filtering data according to category
   */
  const payload = data.filter((entry) => {
    return entry.category === category;
  });

  const newVideos = data.filter((entry) => {
    return entry.new === true;
  })

  if (category) {
    return (
      <div className={style.ClassesSection}>
        <h2>{categoryTitle}</h2>
        <div className={style.horizontalLine}></div>
        <div className={style.ClassesContainer}>
          {payload?.slice(0, next)?.map((lesson, index) => (
            <div key={index}>
              <ClassCard data={lesson} />
            </div>
          ))}
        </div>
        {next < payload?.length && (
          <div className={style.seeMoreBtn}>
            <input
              type="button"
              value="See more"
              onClick={seeMore}
              className={style.button}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={style.ClassesSection}>
        <h2>{categoryTitle}</h2>
        <div className={style.horizontalLine}></div>
        <div className={style.ClassesContainer}>
          {newVideos?.slice(0, next)?.map((lesson, index) => (
            <div key={index}>
              <ClassCard data={lesson} />
            </div>
          ))}
        </div>
        {next < data?.length && (
          <div className={style.seeMoreBtn}>
            <input
              type="button"
              value="See more"
              onClick={seeMore}
              className={style.button}
            />
          </div>
        )}
      </div>
    );
  }
};

export default Classes;
