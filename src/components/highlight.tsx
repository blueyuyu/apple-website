import { right, watch, play, pause } from "@/constant/images.ts";
import { VideoScroll } from "./VideoScroll.tsx";

export const Highlight = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center px-30 py-20">
      <div className="highlight-title w-[80%] flex justify-between items-center">
        <h1 className="section-title">Get the highlights.</h1>
        <div className="title-link flex gap-4">
          <div className="section-link flex gap-2 items-center">
            Watch the film
            <img src={watch} alt="watch" srcset="" />
          </div>
          <div className="section-link flex gap-2 items-center">
            Watch the event
            <img src={right} alt="right" srcset="" />
          </div>
        </div>
      </div>
      {/* video 视频 */}
      <VideoScroll></VideoScroll>
    </div>
  );
};
