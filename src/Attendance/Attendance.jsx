import "./Attendance.css";
import Button from "../Button.jsx";
export default function Attendance() {
  return (
    <section className="attendance-overall-container">
      <div className="attendance-info-image">
        <div className="attendance-info">
          <p className="subtitle">Beliefs that Unite Us</p>
          <h3>Empowered by God to reach everybody</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            temporibus sed assumenda reprehenderit accusamus eos nihil totam?
            Doloremque ducimus sequi labore itaque quas, ipsam optio provident
            omnis numquam sunt animi.
          </p>
          <Button borderRadius="30px">More about us</Button>
        </div>
        <div className="attendance-image">
          <img src="Group-Praying.jpg" alt="" />
        </div>
      </div>
      <div className="medium-of-joining text-center">
        <h3>Join us this Sunday</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          veritatis?
        </p>
        <div>
          <Button>Attend in Person</Button>
          <Button border="1px solid #0e69b6" backgroundColor="transparent">
            Attend Online
          </Button>
        </div>
      </div>
    </section>
  );
}
