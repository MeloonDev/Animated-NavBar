import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUser,
  faStar,
  faHome,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const navBarItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    to: "",
    text: "HOME",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "about",
    text: "O MNIE",
  },
  {
    icon: <FontAwesomeIcon icon={faStar} />,
    to: "skills",
    text: "UMIEJĘTNOŚCI",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    to: "projects",
    text: "PROJEKTY",
  },
  {
    icon: <FontAwesomeIcon icon={faMessage} />,
    to: "contact",
    text: "KONTAKT",
  },
];

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const curPath = location.pathname.split("/")[1];
    const activeItem = navBarItems.findIndex((item) => item.to === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  useEffect(() => {
    indicatorRef.current.style.transform = `translateX(${activeIndex * 70}px)`;
  }, [activeIndex]);

  return (
    <div className="navbar">
      <ul>
        <div ref={indicatorRef} className="indicator"></div>
        {navBarItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeIndex === index ? "active" : ""}`}
          >
            <NavLink className="nav-btn" to={`/${item.to}`}>
              <div className="icon">{item.icon}</div>
              <span className="text">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
