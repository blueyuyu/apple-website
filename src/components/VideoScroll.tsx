import { hightlightsSlides } from "@/constant/index.ts";

export const VideoScroll = () => {
  return (
    <div>
      <div className="video-container">
        <div className="video-box">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            muted
            width="100%"
            height="100%"
          ></video>
        </div>
      </div>
      <div className="video-dots">视频容器的点点</div>
    </div>
  );
};
