import React from "react";
import "./styles/videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
const Footer = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="musicIcon">
          <MusicNoteIcon className="Icon" />
          <Ticker mode="smooth" className="Ticker">
            {() => <p>{song}</p>}
          </Ticker>
        </div>
      </div>
    </div>
  );
};

export default Footer;
