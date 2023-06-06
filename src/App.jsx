import React, { useEffect, useState } from "react";
import Video from "./Components/Video";
import axios from "./axios";
import "./App.css";
const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return req;
    }
    fetchPost();
  });

  return (
    <>
      {/* app container */}
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="app"
      >
        {videos.map(
          ({ url, channel, description, song, likes, share }, index) => (
            <Video
              key={index}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              share={share}
              url={url}
            />
          )
        )}
      </div>
    </>
  );
};

export default App;
