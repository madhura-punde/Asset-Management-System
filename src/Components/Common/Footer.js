import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>copyright &copy; {new Date().getFullYear()} madhura punde</p>
      <p>
        Planning-&gt; Procurement- &gt; Distribution-&gt; Operations-&gt;
        Maintenance-&gt; Disposal
      </p>
    </div>
  );
}

export default Footer;
