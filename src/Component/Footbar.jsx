import React from "react";
import "../CSS/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
const Footbar = () => {
  return (
    <div className="footbar_container">
      <div className="footbar_info">
        <div className="left_footbar">
          <br />
          Everything you Cart here & Everything in A-z Cartz
        </div>
        <div className="right_footbar">
          <div className="right_footbar_contact_us">
            Contact Us :
            <FacebookIcon />
            <InstagramIcon />
            <TelegramIcon />
          </div>
        </div>
      </div>
      <div className="right_container_end_details">
        <div className="left_end_detaile">
          © ChillVishal All Right Preserved
        </div>
        <div className="right_end_detaile"></div>
      </div>
    </div>
  );
};

export default Footbar;
