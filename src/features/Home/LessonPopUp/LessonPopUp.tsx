import React, { useState } from "react";
import ClassCard from "../ClassCard";
import style from "./LessonPopUp.module.scss";
import YoutubeEmbedder from "../YoutubeEmbedder";

/** A read more and see less button */
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={style.text}>
      {isReadMore ? text?.slice(0, 200) : text}
      <button onClick={toggleReadMore} className={style.readOrHideText}>
        {isReadMore ? "Read more" : " Show less"}
      </button>
    </p>
  );
};

const LessonPopUp = ({ mockData, id }) => {
  return (
    <>
        <div className={style.modalBody}>
          <YoutubeEmbedder embedId={mockData[id-1]?.embedCode} />
          <div className={style.modalDescription}>
            <h2>{mockData[id-1]?.title}</h2>
            <h3>{mockData[id-1]?.author}</h3>
            <h4>Runtime: 20 minutes</h4>
            <ReadMore>{mockData[id-1]?.description}</ReadMore>            
          </div>
          <div className={style.suggestedSection}>
            <h2>More Like this</h2>
            <div className={style.suggestedVideos}>
              <ClassCard data={mockData[0]} />
              <ClassCard data={mockData[1]} />
              <ClassCard data={mockData[2]} />
              <ClassCard data={mockData[3]} />
              <ClassCard data={mockData[0]} />
            </div>
          </div>
        </div>
    </>
  );
};

export default LessonPopUp;
