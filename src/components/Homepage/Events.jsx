"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards.tsx";
import eventData from "../Events/EventData.jsx";

export default function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent mt-10 relative text-center ">
        Updates & Events
        {/* <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" /> */}
        {/* <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" /> */}
        <div className="absolute bg-gradient-to-r  from-transparent via-sky-500 to-transparent h-[5px] w-full mt-2 blur-sm" />
        {/* <div className="absolute inset-x-16 sm:inset-x-38  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
      </div>
      <div className="h-1/4 mt-10 rounded-md flex flex-col   items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={eventData} direction="right" speed="slow" />
      </div>
    </>
  );
}
