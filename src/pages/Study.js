import YouTubeVideos from "../components/YouTubeVideos";

const Study = () => {
  return (
    <div>
      <h2>Study Strategies</h2>
      <div className="youtube-videos-container">

        <YouTubeVideos
          videoId="7NJIhcQ9AwQ"
          strategyExplanation="Lofi Music offers calming and therapeutic effects that can be beneficial for studying."
        />
        <YouTubeVideos
          videoId="4kiWb0eyNo4"
          strategyExplanation="The Pomodoro Technique is a study strategy that involves 25-minute focused study sessions followed by 5-minute breaks. This can be customized to suit your preferences."
        />
        <YouTubeVideos
          videoId="NJuSStkIZBg"
          strategyExplanation="Ambient background music enhaces focus and concentration."
        />
        <YouTubeVideos
          videoId="nX-xshA_0m8"
          strategyExplanation="The Cornell Note-Taking System is an effective method for taking organized notes during lectures and readings."
        />
        <YouTubeVideos
          videoId="w3HCPVMtd8M"
          strategyExplanation="Listening to classical music helps to reduce stress and stimulates happiness which helps students better concentrate on the task at hand."
        />

        <YouTubeVideos
          videoId="tkm0TNFzIeg"
          strategyExplanation="The Feyman Technique is a study method that involves explaining a topic in simple terms as if teaching it to someone else. This process helps to indentify gaps in your understanding."
        />

      </div>
    </div>
  );
};

export default Study;

