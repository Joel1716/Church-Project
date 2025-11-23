import NavBar from "./NavBar/NavBar.jsx";
import Hero from "./Hero/Hero.jsx";
import Quote from "./Quote/Quote.jsx";
import Visiting from "./Visiting/Visiting.jsx";
import Groups from "./Groups/Groups.jsx";
import Attendance from "./Attendance/Attendance.jsx";
import WatchSermons from "./WatchSermons/WatchSermons.jsx";
import Faq from "./FAQ/Faq.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Quote />
      <Visiting />
      <Groups />
      <WatchSermons />
      <Attendance />
      <Faq />
      <Footer />
    </>
  );
}
