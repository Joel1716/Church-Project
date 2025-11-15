import { useState } from "react";
import "./NavBar.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "../Button.jsx";
export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setHamburgerClick(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 40);
  });
  function handleHamburgerClick() {
    setHamburgerClick((hamburgerClick) => !hamburgerClick);
  }
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`flex-center nav-bar ${scrolled ? "nav-scrolled" : ""}`}
    >
      <img src="RCCG-Goshen.png" alt="RCCG-Goshen Logo" />
      <div className="nav-bar-links">
        <ul className={`${hamburgerClick ? "display" : ""} flex-center`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Live Coverage</a>
          </li>
          <li>
            <Button>Contact Us</Button>
          </li>
        </ul>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </motion.nav>
  );
}
