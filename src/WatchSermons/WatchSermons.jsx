import "./WatchSermons.css";
import Button from "../Button.jsx";
export default function WatchSermons() {
  return (
    <section className="sermons-container">
      <div className="sermons-info">
        <p className="subtitle">Powerful & Life-Changing</p>
        <h3>Watch the latest sermon</h3>
        <div className="sermon-buttons">
          <Button borderRadius="30px">Youtube Channel</Button>
          <Button borderRadius="30px">Last Week Sermon</Button>
        </div>
      </div>
      <div className="sermon-video">
        <video width="320" height="240" controls>
          <source src="walking-talking.mp4" type="video/mp4" />
          <source src="walking-talking.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
