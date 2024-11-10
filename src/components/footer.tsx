
'use client'

export default function Footer() {
  return (
   < div className=""bg-black text-gray-400 py-12>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">
          About Us
        </h2>
        <p className="mb-4" >
        Hello! Im Arisha Saleem,My journey in web development has been driven by a love for both creativity and problem-solving,
  allowing me to build projects that are not only functional but also visually captivating.
  With a background JavaScript, CSS, HTML, or Next.js, Every project is an opportunity to innovate and refine my skills, 
  and Im always eager to learn and adapt to new challenges.
Thank you for visiting my portfolio. I look forward to connecting and exploring how we can bring ideas to life together!
    </p>
      </div>



      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
        <ul>
         <li>
                <a href="#"
                className="hover:text-white transition-colors duration-300">Home</a>
    </li>
            <li>
           <a href="#" 
            className="hover:text-white transition-colors duration-300" >About</a>
    </li>
           
           <li>
            <a href="#"
              className="hover:text-white transition-colors duration-300"> items</a>
    </li>
            <li>
                <a href="#"
                  className="hover:text-white transition-colors duration-300">Contact Us</a>
            </li>
        </ul>
        </div> 


      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Follow us</h2>
        <div className="flex space-x-4">
            <a href="#"
              className="hover:text-white transition-colors duration-300">Facebook</a>
              <a href="#"
              className="hover:text-white transition-colors duration-300">Instagram</a>
              <a href="#"
              className="hover:text-white transition-colors duration-300">linkedIn</a>

        </div>
      </div>

      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
        <p>Karachi,Pakistan</p>
        <p> karachi,Naval Colony</p>
        <p>Email: arishasaleem03@gmail.com</p>
        <p>Phone: (+92)3030178575</p>
      </div>

    </div>
    <p className="text-center text-xs pt-8">© 2025, Arisha Saleem, Portfolio. All Rights Reserved. Crafted with passion and precision.</p>
    </div>
  )
}
