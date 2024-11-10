import Link from "next/link";
import courseData from "../data/project-coarses.json"; // Ensure the path is correct

interface Course {
  id: number | string;
  title: string;
  description: string;
  href: string;
}

interface CourseData {
  courses: Course[];
}

function Projects() {
  const { courses } = courseData as CourseData; // Type assertion

  return (
    <div className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-extrabold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((item: Course) => (
            <Link key={item.id} href={item.href}>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <h2 className="mt-2 text-gray-600">{item.description}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      
  
    
    </div>
  );
}

export default Projects;
