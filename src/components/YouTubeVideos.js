import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId, strategyExplanation }) => {
  const opts = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="youtube-video">
      <YouTube
        videoId={videoId}
        style={{ width: "70vw", height: "40vw" }}
        opts={opts}
      />
      {/* if strategyExplanation != null then show strategy-explanation*/}
      {strategyExplanation ? (
        <p className="strategy-explanation">{strategyExplanation}</p>
      ) : null}
    </div>
  );
};

export default YouTubeVideo;
