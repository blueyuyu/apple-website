import { hightlightsSlides } from "@/constant/index.ts";

export const VideoScroll = () => {
  return (
    <div>
      <div className="relative video-container h-[640px] flex overflow-x-auto">
        {hightlightsSlides.map((item, index) => (
          <div className="relative video-box w-[1200px] h-auto" key={index}>
            <video
              autoPlay
              muted
              width="1200px"
              height="100%"
              className="hight-video !w-[1200px] h-auto object-cover"
            >
              <source width="1200px" src={item.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <div className="video-dots">视频容器的点点</div>
    </div>
  );
};
