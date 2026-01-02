import "./navbar.scss";
import faceBook from "../../../public/facebook.png";
import GitHub from "../../../public/GitHub.png";
import Linkedin from "../../../public/Linkedin.png";
import Instagram from "../../../public/instagram.png";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mustafa Elkhashab
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/mostafa.elkhashab.320977"
            target="_blank"
          >
            <img src={faceBook} alt="" />
          </a>
          <a href="https://github.com/MostafaElkhashab" target="_blank">
            <img src={GitHub} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-elkhashab-4923b32b5/"
            target="_blank"
          >
            <img src={Linkedin} alt="" />
          </a>
          <a
            href="https://www.instagram.com/mostafaelkhashab79/"
            target="_blank"
          >
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
