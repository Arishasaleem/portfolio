'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



const testimonialCards=[
    {
        quote: "The most damaging phrase in the language is, It is always been done that way.",
        name: "Grace Hopper",
        title: " (Computer Scientist and Rear Admiral)",
    },
    {
        quote: "Always deliver more than expected.",
        name: "Larry Page",
        title: " (Co-founder of Google)",
    },
     {
        quote: "Everybody in this country should learn how to program a computer, because it teaches you how to think.",
        name: "Steve Jobs ",
        title: "(Co-founder of Apple) ",
    },
    {
        quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        name: "Edsger W. Dijkstra",
        title: "(Computer Scientist) ",
    }
]






function TestimonialCards () {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.3] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">HEAR THE THOUGHTS OF SUCCESS</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonialCards}
        direction="right"
        speed="slow"
      />
      </div>
      </div>
    </div>
  )
}

export default TestimonialCards
