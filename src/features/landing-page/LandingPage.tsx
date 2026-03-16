"use client";

import { Button } from "@/components/Button";
import { useState } from "react";

export function LandingPage() {
  const [pinned, setPinned] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center gap-8 p-4">
      <div
        className={`h-44 w-full bg-background-dark-1 rounded p-8 overflow-auto relative ${pinned ? "shadow-inset" : "shadow-medium"} transition-all duration-300`}
      >
        <div className="flex h-full justify-center items-center">
          <p>Pinned: {pinned ? "true" : "false"}</p>
        </div>
        <Button
          variant="text"
          className="absolute top-2 right-2 rounded-full text-sm size-8"
          onClick={() => setPinned(!pinned)}
        >
          {pinned ? "◆" : "◇"}
        </Button>
        {/* <Image
          src={MonoLightFlower}
          alt="MonoLightFlower"
          className="absolute left-0 bottom-0 h-full object-contain w-fit p-8 pb-0"
        /> */}
      </div>
    </div>
  );
}
