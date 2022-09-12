import React from "react";
import style from './YoutubeEmbedder.module.scss'
import PropTypes from "prop-types";

const YoutubeEmbedder = ({ embedId }) => (
  <div className={style.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbedder.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedder;