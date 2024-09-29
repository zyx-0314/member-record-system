"use client"

import { useEffect, useState } from 'react';

import DisplayPromotionSection from '@/components/section/displayPromotion';
import { DisplayPromotionDS } from '@/schema/frontEndDataStructures';
import { ScrollArea } from '@/components/ui/scroll-area';
import Layout from '@/components/elements/layout';

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const dummyData: DisplayPromotionDS[] = [
    {
      title: "General Assembly",
      src: "/events/video/general_assembly-3.mp4",
      config: "video",
      alt: ""
    },
    {
      title: "Kick-Off",
      src: "/events/image/kick-off.jpg",
      config: "image",
      alt: "Kick-Off"
    },
  ];

  const HandleSelectedEvent = (index: number) => {
    setSelectedEvent(index);
    setTimer(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= 100) {
          clearInterval(interval);
          if (dummyData.length - 1 == selectedEvent) setSelectedEvent(0);
          else setSelectedEvent(selectedEvent + 1);
          return prevTimer;
        }
        return prevTimer + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    setTimer(0);
  }, [selectedEvent]);

  return (
    <Layout
      activeNav={"Home"}
    >
      <aside className="left w-2/12 flex flex-col gap-4 mx-4 my-16">
        <h3 className='font-semibold text-white text-center text-2xl'>Events & News</h3>
        <ScrollArea>
          {dummyData.map((data, id) => {
            return (
              <div key={id} onClick={() => HandleSelectedEvent(id)} className={`text-white border-b-4 my-4 mr-4 cursor-pointer ${id === selectedEvent ? "border-b-violet-300" : "border-b-white"}`}>{data.title}</div>
            )
          })}
        </ScrollArea>
      </aside>
      <div className="border"></div>

      <DisplayPromotionSection
        {...dummyData[selectedEvent]}
      />
    </Layout>
  );
}
