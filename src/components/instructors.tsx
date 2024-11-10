 'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";



    const experts = [
        {
          id: 1,
          name: "Evan You",
          designation: "Creator of Vue.js",
          image: "https://avatars.githubusercontent.com/u/499550?v=4" // GitHub profile image URL
        },
        {
          id: 2,
          name: "Dan Abramov",
          designation: "Co-creator of Redux and React Core Team Member",
          image: "https://avatars.githubusercontent.com/u/810438?v=4" // GitHub profile image URL
        },
        {
          id: 3,
          name: "Wes Bos",
          designation: "Developer and Educator",
          image: "https://avatars.githubusercontent.com/u/176013?v=4" // GitHub profile image URL
        },
        {
          id: 4,
          name: "Sarah Drasner",
          designation: "SVG Animation and Frontend Expert",
          image: "https://avatars.githubusercontent.com/u/2281088?v=4" // GitHub profile image URL
        },
        {
          id: 5,
          name: "Addy Osmani",
          designation: "Engineering Manager at Google Chrome",
          image: "https://avatars.githubusercontent.com/u/110953?v=4" // GitHub profile image URL
        }
      ];
      
  
  

export default function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
     <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">MEET OUR INSTRUCTOR</h2>
     <p className="text-base md:text-left text-white text-center mb-4"> Discover the talented professionals who guide your 
        coding skills</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={experts} />
        </div>
      </WavyBackground>
    </div>
  )
 }
