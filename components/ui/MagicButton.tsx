import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: { title?: string; icon?: React.ReactNode; position?: string; handleClick?: () => void; otherClasses?: string }) => {
  return (
    <button className="relative inline-flex h-10 small:h-12 md:h-9 lg:h-12 2xl:h-14 w-full md:w-52 lg:w-60 desktop:w-64 2xl:w-[19rem] largesceen:w-[21rem] overflow-hidden rounded-lg p-[1px] focus:outline-none" onClick={handleClick}>
      <span className="" />

     
      <span
        className={` h-full w-full cursor-pointer
            inline-flex px-4 py-1 2xl:py-4 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 small:text-sm medium:text-xs lg:text-sm desktop:text-base 2xl:text-lg largesceen:text-xl font-medium text-xs text-white backdrop-blur-3xl gap-2 2xl:gap-3 ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
