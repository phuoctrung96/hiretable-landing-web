import { NextPage } from 'next';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface VideoProps {
  width: number;
  height: number;
}
const Video: NextPage<VideoProps> = ({ width, height }) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();
  const handlePlay = () => {
    videoRef.current && videoRef.current.play();
    setIsPlay(true);
  };
  const handlePause = () => {
    videoRef.current && videoRef.current.pause();
    setIsPlay(false);
  };
  return (
    <div
      className="relative"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {!isPlay && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          onClick={handlePlay}
        >
          <Image
            className="opacity-80"
            alt="play"
            src="/play.svg"
            height={96}
            width={96}
          />
        </button>
      )}
      <video
        ref={el => {
          videoRef.current = el as HTMLVideoElement;
        }}
        loop
        muted
        onClick={handlePause}
        className="flex justify-center items-center rounded-[64px] h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
