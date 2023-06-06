import React, { useRef, useState } from "react";
import styles from "./Video.module.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const VideoComponent = ({ channel, description, song }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className={styles.videoWrapper}>
      <video
        loop
        className={styles.player}
        autoPlay={true}
        ref={videoRef}
        onClick={handleVideoPlayback}
      >
        <source src="/reel1.mp4" type="video/mp4" />
      </video>
      {/* footer & sidebar */}

      <Sidebar />
      <Footer channel={channel} description={description} song={song} />
    </div>
  );
};

export default VideoComponent;
