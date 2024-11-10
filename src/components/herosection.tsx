import Link from "next/link"
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";





const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center text-white relative overflow-hidden
     mx-auto py-14 md:py-0">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-white text-center mt-56">
        <h1 className=" font-semibold mt-20 md:mt-0 text-white text-4xl md:text-7xl bg-clip-text bg-gradiant-to-b from-neutral-50
        to-neutral-500">Portfolio mine</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">i have my own portfolio</p>
        <div className="mt-4">

          <Link href={"/items"}>
          <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
          explore my info
          </Button>
          </Link>


        </div>


      </div>
  
    </div>
  )
}

export default Herosection
