import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId, strategyExplanation }) => {
  const opts = {
    height: "350",
    width: "550",
  };

  return (
    <div className="youtube-video">
      <YouTube videoId={videoId} opts={opts} />
      <p className="strategy-explanation">{strategyExplanation}</p>
    </div>
  );
};

export default YouTubeVideo;
