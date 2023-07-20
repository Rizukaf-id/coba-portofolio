import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Sertifikat
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;