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
  const videoDotRefs = useRef<HTMLElement[] | null[]>([]);
  const videoDotInnerRefs = useRef<HTMLElement[] | null[]>([]);

  useEffect(() => {
    if (loadedMetadata.length > 3) {
      // console.log("loadedMetadata", videoId, videoRefs.current[videoId]);
      if (!isPlaying) {
        videoRefs.current[videoId]?.pause();
      } else {
        isReStart && videoRefs.current[videoId]?.play();
      }
    }
  }, [videoId, loadedMetadata, isPlaying]);

  useEffect(() => {
    let currentProgress = 0;
    // 对内部 div 使用动画
    const dotBars = videoDotInnerRefs.current;
    if (dotBars[videoId]) {
      const anim = gsap.to(dotBars, {
        onUpdate: function () {
          const progress = Math.ceil(anim.progress() * 100);
          currentProgress = progress;
          gsap.to(videoDotRefs.current[videoId], {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });
          gsap.to(dotBars[videoId], {
            width: `${currentProgress}%`,
            backgroundColor: "#fff",
          });
        },
        // 更新之后状态不还原，进度走动不正常, 走动时间不对
        onComplete: function () {
          if (isPlaying) {
            gsap.to(videoDotRefs.current[videoId], {
              width: "12px",
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        anim.restart();
      }

      // 动画执行顺序
      const animUpdate = () => {
        anim.progress(
          videoRefs.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };
      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId]);

  useEffect(() => {
    console.log(
      "videoId",
      videoId,
      video,
      videoRefs.current[videoId],
      "videoRef",
      videoRefs.current
    );
  }, [videoId]);

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${videoId * -100}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [videoId]);

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
      videoRefs?.current[videoId]?.pause();
      handleVideo("pause");
    } else {
      videoRefs?.current[videoId]?.play();
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
          {videoRefs.current.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-[#afafaf] rounded-full w-3 h-3 relative overflow-hidden`}
                ref={(dotRef) => (videoDotRefs.current[index] = dotRef)}
              >
                <div
                  className="absolute top-0 left-0 h-[100%]"
                  ref={(dotInnerRef) =>
                    (videoDotInnerRefs.current[index] = dotInnerRef)
                  }
                ></div>
              </div>
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
