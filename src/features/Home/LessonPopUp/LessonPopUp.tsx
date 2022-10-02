import React, { useState } from "react";
import ClassCard from "../ClassCard";
import style from "./LessonPopUp.module.scss";
import YoutubeEmbedder from "../YoutubeEmbedder";

/** A read more and see less button */
export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={style.text}>
      {isReadMore ? text?.slice(0, 150) : text}
      <button onClick={toggleReadMore} className={style.readOrHideText}>
        {isReadMore ? "Read more" : " Show less"}
      </button>
    </p>
  );
};

const LessonPopUp = ({ payload, id }) => {
  const masterclass = payload?.find((masterclass) => masterclass?.id === id);
  
  return (
    <>
        <div className={style.modalBody}>
          <YoutubeEmbedder embedId={masterclass?.youtubeEmbedID} />
          <div className={style.modalDescription}>
            <h2>{masterclass?.title}</h2>
            <h3>{masterclass?.instructor}</h3>
            {/* <h4>Runtime: 20 minutes</h4> */}
            <hr/>
            <ReadMore>{masterclass?.description}</ReadMore>            
          </div>
          <div className={style.suggestedSection}>
            <h2>More Like this</h2>
            <div className={style.suggestedVideos}>
              {payload?.map((suggestion, index) => 
                <ClassCard data={suggestion} key={index}/>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default LessonPopUp;
