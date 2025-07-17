import { right, watch, play, pause } from "@/constant/images.ts";
import { VideoScroll } from "./VideoScroll.tsx";

export const Highlight = () => {
  return (
    // 限制外层宽度，不出现滚动条
    <div className="h-screen px-30 py-20 bg-[#101010] overflow-hidden">
      {/* 这里使用 screen-max-width 的用处是，限制内容居中，不能用overflow 会导致视频元素遮挡  */}
      <div className="screen-max-width">
        <div className="highlight-title w-[80%] mb-12 pl-4 sm:pl-0 md:mx-auto lg:flex lg:justify-between lg:items-center">
          <h1 className="section-title pb-4 lg:pb-0">Get the highlights.</h1>
          <div className="title-link md:flex gap-4">
            <div className="section-link flex gap-2 items-center pb-4 md:pb-0">
              Watch the film
              <img src={watch} alt="watch" />
            </div>
            <div className="section-link flex gap-2 items-center">
              Watch the event
              <img src={right} alt="right" />
            </div>
          </div>
        </div>
        {/* video 视频 */}
        <VideoScroll></VideoScroll>
      </div>
    </div>
  );
};
