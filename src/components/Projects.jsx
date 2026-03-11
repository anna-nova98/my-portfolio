import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            image="/projects/watch-shop.png"
            title="Devita Watchs"
            description="Online store for selling wristwatches, Developed using Next js 13 app dirctory, static & dynamic metadata, shopping cart, favorite list, With notifications toast."
            tags={["HTML", "CSS", "Material Ui", "Javascript", "React", "Next"]}
            github={"https://github.com/anna-nova98/watch-shop"}
            live_demo={"http://devita-watchs.vercel.app/"}
          />

          <ProjectCard
            image="/projects/kindertales.png"
            title="Kindertales"
            description="Kindertales provides software that helps daycare businesses manage their entire childcare center—from staff and children to finances and operations—in one place."
            tags={[ "React"]}
            live_demo={"https://www.kindertales.com/"}

          />

          <ProjectCard
            image="/projects/hudl.png"
            title="AI-Powered Volleyball Stats for Development and Recruiting"
            description="The website of Hudl provides AI-powered sports analytics tools that analyze game videos and generate performance statistics to help athletes and teams improve and support recruiting."
            tags={["React"]}
            live_demo={"https://auth.balltime.com/"}
          />

          <ProjectCard
            image="/projects/coffee.png"
            title="Coffee shop template"
            description="Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list."
            tags={["HTML", "CSS", "Bootstrap", "Javascript"]}
            github={"https://github.com/anna-nova98/Coffee-shop.git"}
            live_demo={"https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap/"}
          />

        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function ProjectCard({ image, title, description, tags, github, live_demo }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-rose-100 text-rose-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
         <div className="flex items-center gap-6 text-sm">
          {
            live_demo&&
          <a
            href={live_demo}
            className="flex items-center gap-2 text-rose-500 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          }
          {
            github&&
          <a
            href={github}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <Github size={16} />
            Source Code
          </a>
          }
        </div> 

      </div>
    </div>
  );
}