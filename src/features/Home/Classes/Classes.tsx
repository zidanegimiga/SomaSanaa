import React, { useState } from "react";
import Link from "next/link";
import style from "./Classes.module.scss";
import ClassCard from "../ClassCard";

const classPerView = 3;

const Classes = ({ data }) => {
  const [next, setNext] = useState(classPerView);

  const seeMore = () => {
    setNext(next + classPerView);
  };

  return (
    <div className={style.ClassesSection}>
      <h2> Recently Added</h2>
      <hr className={style.horizontalLine} />
      <div className={style.ClassesContainer}>
        {data?.slice(0, next)?.map((lesson, index) => (
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
};

export default Classes;
