"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards.tsx";
import eventData from "../Events/EventData.jsx";

export default function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent mt-10 relative text-center ">
        Updates & Events
        <div className="absolute bg-gradient-to-r  from-transparent via-sky-500 to-transparent h-[5px] w-full mt-2 blur-sm" />
      </div>
      <div className="h-1/4 mt-10 rounded-md flex flex-col   items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={eventData} direction="left" speed="slow" />
      </div>
    </>
  );
}
