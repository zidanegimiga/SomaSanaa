import React from "react";
import style from './YoutubeEmbedder.module.scss'
import PropTypes from "prop-types";

const YoutubeEmbedder = ({ embedId }) => (
  <div className={style.videoResponsive}>
    <iframe
      width="640"
      height="385"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="controls; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbedder.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedder;