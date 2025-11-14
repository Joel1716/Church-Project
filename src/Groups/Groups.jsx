import "./Groups.css";
import Button from "../Button.jsx";
export default function Groups() {
  const groupInfo = [
    {
      img: "Female-Praying.jpg",
      title: "Teenage Church",
      messsage:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti? Rerum sequi fugit blanditiis maxime facilis excepturi, nisi hic veniam!",
    },
    {
      img: "Children.jpg",
      title: "Children Church",
      messsage:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti? Rerum sequi fugit blanditiis maxime facilis excepturi, nisi hic veniam!",
    },
    {
      img: "Teenage.jpg",
      title: "Youth Service",
      messsage:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti? Rerum sequi fugit blanditiis maxime facilis excepturi, nisi hic veniam!",
    },
  ];
  return (
    <section className="groups-container">
      <div className="heading text-center">
        <h2>Our Ministries & Groups</h2>
        <p>
          At RCCG Goshen, we believe everyone has a place to belong. Explore our
          ministry groups designed to help members grow, connect, and serve
          together.
        </p>
      </div>
      <div className="groups-info-container">
        {groupInfo.map((info, value) => {
          return (
            <div key={value} className="each-group-outer-container">
              <img src={info.img} alt="" />
              <div className="each-group-info-container">
                <div className="each-group-info">
                  <h3>{info.title}</h3>
                  <p>{info.messsage}</p>
                  <Button padding="1rem 2rem">Learn More</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
