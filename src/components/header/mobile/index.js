import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Sertifikat
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>
  );
}

export default Mobile;