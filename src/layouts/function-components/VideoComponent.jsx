import { useState } from "react";
import { Play } from "react-feather";
import YouTube from "react-youtube";

const VideoComponent = ({ video_id, thumbnail }) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-wrapper">
      <div className="video-frame"></div>
      <div className="video">
        <div className="video">
          {!play ? (
            <img className="video-thumbnail" src={thumbnail} alt="" />
          ) : (
            <YouTube
              videoId={video_id}
              opts={videoOptions}
              iframeClassName={`aspect-video w-full h-full max-w-full bg-transparent rounded-2xl`}
            />
          )}
        </div>
      </div>
      {!play && (
        <button className="video-play-btn" onClick={() => setPlay(true)}>
          <Play />
        </button>
      )}
    </div>
  );
};

export default VideoComponent;
