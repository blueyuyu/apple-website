import { hightlightsSlides } from "@/constant/index.ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export const VideoScroll = () => {
  const [video, setVideo] = useState({
    isEnd: false,
    isStart: false,
    isPlaying: false,
    isPaused: false,
    videoId: 0,
  });

  const { isEnd, isStart, isPlaying, isPaused, videoId } = video;
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${videoId * -100}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [videoId]);

  // setInterval(() => {
  //   if (videoId < 4) {
  //     console.log("end", videoId);
  //     setVideo({
  //       ...video,
  //       videoId: videoId + 1,
  //     });
  //   } else {
  //     setVideo({
  //       ...video,
  //       videoId: 0,
  //     });
  //   }
  // }, 2000);

  return (
    <div>
      <div className="flex items-center">
        {hightlightsSlides.map((item, index) => (
          <div id="slider" key={item.id}>
            <div className="video-container relative">
              <div className="w-full h-full">
                <video autoPlay muted className="hight-video" width="100%">
                  <source src={item.video} width="100%" type="video/mp4" />
                </video>
              </div>
              <div className="box-desc">
                {item.textLists.map((textItem, textIndex) => (
                  <p
                    key={textIndex}
                    className="md:text-2xl text-xl font-medium text-white"
                  >
                    {textItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="video-dots text-white">视频容器的点点2222</div>
    </div>
  );
};
