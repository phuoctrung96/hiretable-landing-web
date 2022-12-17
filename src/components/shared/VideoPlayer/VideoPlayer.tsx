import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { AiFillPauseCircle } from 'react-icons/ai';

interface VideoProps {
  width: number;
  height: number;
  url: string;
}
const Video: React.FC<VideoProps> = ({ width, height, url }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isUseButton, setIsUseButton] = useState(false);

  const videoRef = useRef<HTMLVideoElement>();
  const handlePlay = () => {
    if (!isUseButton) {
      videoRef.current && videoRef.current.play();
      setIsPlay(true);
    }
  };
  const handlePause = () => {
    if (!isUseButton) {
      videoRef.current && videoRef.current.pause();
      setIsPlay(false);
    }
  };
  const handlePlayWithBtn = () => {
    setIsUseButton(true);
    videoRef.current && videoRef.current.play();
    setIsPlay(true);
  };
  const handlePauseWithBtn = () => {
    setIsUseButton(false);
    videoRef.current && videoRef.current.pause();
    setIsPlay(false);
  };
  return (
    <div
      className="relative group"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {!isUseButton ? (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          onClick={() => handlePlayWithBtn()}
          onMouseEnter={handlePlay}
        >
          <Image
            className="opacity-80"
            alt="play"
            src="/play.svg"
            height={96}
            width={96}
          />
        </button>
      ) : (
        <button
          className="absolute hidden group-hover:flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          onClick={() => handlePauseWithBtn()}
        >
          <AiFillPauseCircle className="opacity-80" size={96} color="#F2F2F2" />
        </button>
      )}
      <video
        ref={el => {
          videoRef.current = el as HTMLVideoElement;
        }}
        loop
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
        className="flex justify-center items-center rounded-[64px] h-full object-cover"
        src={url}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export { Video };
