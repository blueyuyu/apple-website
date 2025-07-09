import { hightlightsSlides } from "@/constant/index.ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { play, pause, replay } from '@/constant/images.ts';

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
      <div className="video-dots text-white flex justify-center items-center mt-10">
        <div className="dotList bg-[#262627] flex rounded-3xl py-5 px-8 gap-4">
          {
            hightlightsSlides.map((item, index) =>{
              return (
                <div key={item.id} className="bg-[#afafaf] rounded-full w-4 h-4">454455
                </div>
              )
            })
          }
        </div>
        <div className="bg-[#262627] rounded-full py-4 px-4 ml-4">
          <img
            src={replay}
            alt="player"
            className="w-6 h-6 rounded-full"></img>
        </div>
      </div>
    </div>
  );
};
