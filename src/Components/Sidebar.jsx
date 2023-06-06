import React, { useState } from "react";
import "./styles/videoSidebar.css";

// ICONS
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const Sidebar = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="videoSidebar">
      {/*   <div className="IconContainer"> */}
      <ul className="iconList">
        <li>
          <div className="iconFirst">
            <FavoriteIcon
              style={{ color: isLiked ? "red" : "" }}
              onClick={() => {
                setIsLiked(!isLiked);
              }}
            />

            <p>100</p>
          </div>
        </li>
        <li>
          <div className="iconSecond">
            <InsertCommentIcon />
            <p>101</p>
          </div>
        </li>
        <li>
          <div className="iconThird">
            <ShareIcon />
          </div>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
