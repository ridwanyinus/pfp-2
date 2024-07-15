"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("grid grid-cols-1 sm:grid-cols-2  gap-4 lg:gap-6 mx-auto", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ridwanyinusa15@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 px-6",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">{img && <Image width={500} height={500} src={img} alt={img} className={cn(imgClassName, "object-cover object-center ")} />}</div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && <Image src={spareImg} alt={spareImg} width={220} height={220} className="object-cover object-center w-full h-full" />}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">{description}</div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-50">{title}</div>

          {id === 2 && <GlobeDemo />}

          {id === 6 && (
            <div className="mt-5 relative">
              <a href="mailto:ridwanyinusa15@gmail.com">
                <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
