import { DisplayPromotionDS } from "@/schema/frontEndDataStructures";
import Image from "next/image";

export default function DisplayPromotionSection({ src, alt = "", config }: DisplayPromotionDS) {
  let display;

  if (config === 'image') {
    display = ImageDisplay(src, alt);
  } else if (config === 'video') {
    display = VideoDisplay(src);
  } else {
    display = <><h1>Invalid Choice</h1></>
  }

  return (
    <>
      <div className="aspect-w-16 w-10/12 aspect-h-9 p-4 rounded-lg overflow-hidden relative">
        {display}
      </div>
    </>
  );
};

function ImageDisplay(src: string, alt: string) {
  return (
    <>
      <Image className="absolute bg-contain p-10" src={src} fill alt={alt} />
    </>
  );
};

function VideoDisplay(src: string) {
  return (
    <>
      <video className="w-full h-full" preload="none" autoPlay loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};