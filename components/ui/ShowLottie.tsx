'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import lottie from '@/public/lottie/frontend.json';
type Props = {
  path?: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={lottie}></Player>
    </div>
  );
};

export default ShowLottie;
