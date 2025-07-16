import { hightlightsSlides } from "@/constant/index.ts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { play, pause, replay } from "@/constant/images.ts";

export const VideoScroll = () => {
  const [video, setVideo] = useState({
    isEnd: false,
    isReStart: false,
    isPlaying: false,
    isPaused: false,
    videoId: 0,
  });
  const [loadedMetadata, setLoadedMetadata] = useState([]);

  const { isEnd, isReStart, isPlaying, isPaused, videoId } = video;

  const videoRefs = useRef<HTMLVideoElement[] | null[]>([]);

  useEffect(() => {
    if (loadedMetadata.length > 3) {
      console.log("loadedMetadata", videoId, videoRefs.current[videoId]);
      if (!isPlaying) {
        videoRefs.current[videoId]?.pause();
      } else {
        isReStart && videoRefs.current[videoId]?.play();
      }
    } else {
    }
  }, [videoId, loadedMetadata, isPlaying]);

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
  //     // setVideo({
  //     //   ...video,
  //     //   videoId: 0,
  //     // });
  //   }
  // }, 2000);

  const handleVideo = (type: string, id?: number) => {
    switch (type) {
      case "toNext":
        setVideo({
          ...video,
          videoId: videoId + 1,
        });
        break;
      case "restart":
        setVideo({
          ...video,
          videoId: 0,
          isReStart: true,
        });
        break;
      case "isPlaying":
        setVideo({
          ...video,
          isPlaying: true,
        });
        break;
      case "pause":
        setVideo({
          ...video,
          isPlaying: !isPlaying,
          isPaused: !isPaused,
        });
        break;
      case "play":
        setVideo({
          ...video,
          isPlaying: !isPlaying,
          isPaused: !isPaused,
        });
    }
  };

  const loadedMetadataFn = (e: any) => {
    setLoadedMetadata((pre) => [...pre, e]);
    // setLoadedMetadata(e.target.duration);
  };

  const handleVideoBtnClick = () => {
    if (isPlaying) {
      videoRefs?.current[videoId].pause();
      handleVideo("pause");
    } else {
      videoRefs?.current[videoId].play();
      handleVideo("play");
    }
  };

  return (
    <div>
      <div className="flex items-center overflow-hidden">
        {hightlightsSlides.map((item, index) => (
          <div id="slider" key={item.id}>
            <div className="video-container relative">
              <div className="w-full h-full">
                <video
                  autoPlay
                  muted
                  className="hight-video"
                  width="100%"
                  onEnded={() =>
                    index != 3
                      ? handleVideo("toNext", index)
                      : handleVideo("restart", index)
                  }
                  onPlay={() => handleVideo("isPlaying")}
                  ref={(videoRef) => (videoRefs.current[index] = videoRef)}
                  onLoadedMetadata={(e) => loadedMetadataFn(e)}
                >
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
          {hightlightsSlides.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${
                  index === videoId ? "bg-[#fff]" : "bg-[#afafaf]"
                }  rounded-full w-4 h-4`}
              ></div>
            );
          })}
        </div>
        <div className="bg-[#262627] rounded-full py-4 px-4 ml-4">
          <img
            src={isPlaying ? pause : isReStart ? replay : play}
            alt="player"
            className="w-6 h-6 rounded-full cursor-pointer"
            onClick={handleVideoBtnClick}
          ></img>
        </div>
      </div>
    </div>
  );
};
