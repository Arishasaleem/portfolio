import Footer from '@/components/footer';
import Herosection from '@/components/herosection';
import Instructors from '@/components/instructors';
import Projects from '@/components/projects';
import TestimonialCards from '@/components/testimonialCards';



const Home = () => {
  return (
    <main className=' text-white min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
         <h1 className='text-center'></h1>
         <Herosection />
         <Projects/>
         < TestimonialCards/>
         <Instructors  />
         < Footer />
    </main>
  )
}

export default Home;
