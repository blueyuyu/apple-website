import { hightlightsSlides } from "@/constant/index.ts";

export const VideoScroll = () => {
  return (
    <div>
      <div className="flex items-center">
        {hightlightsSlides.map((item, index) => (
          <div className="video-container">
            <div className="relative video-box h-auto" key={index}>
              <video
                autoPlay
                muted
                width="100%"
                height="100%"
                className="hight-video h-auto object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="box-desc">
              <p>1112222</p>
            </div>
          </div>
        ))}
      </div>
      <div className="video-dots">视频容器的点点</div>
    </div>
  );
};
