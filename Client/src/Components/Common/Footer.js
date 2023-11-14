import React from "react";
import "../Styles/Footer.css";

//Icons Import
import {
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaHome,
  FaBlogger,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="section-a ">
        <b>ALMP</b>
        <p>Asset Lifecycle Management Portal</p>
        <span className="footerIcons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sachin-kadam-2356781aa/"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <FaTwitterSquare size={30} />

          <FaYoutubeSquare size={30} />
          <FaFacebookSquare size={30} />
        </span>
      </div>
      <span className="section-b">
        <div>
          <a href="/">
            <FaHome size={15} />
            Home
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sachin-kadam-2356781aa/"
            rel="noreferrer"
          >
            <MdWork size={15} />
            Work
          </a>
        </div>
        <div>
          <a href="/">
            <FaBlogger size={15} />
            Blog
          </a>
        </div>

        <div>
          <a href="/">About</a>
        </div>
      </span>
      {/* <p>copyright &copy; {new Date().getFullYear()}</p> */}

      {/* <p>
        Planning-&gt; Procurement- &gt; Distribution-&gt; Operations-&gt;
        Maintenance-&gt; Disposal
      </p> */}
    </div>
  );
}

export default Footer;
