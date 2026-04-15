import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const vp = { once: true, amount: 0.1 };

const projects = [
  { image: "/projects/watch-shop.png", title: "Devita Watchs",
    description: "Online store for selling wristwatches, Developed using Next js 13 app directory, static & dynamic metadata, shopping cart, favorite list, With notifications toast.",
    tags: ["HTML","CSS","Material Ui","Javascript","React","Next"],
    github: "https://github.com/anna-nova98/watch-shop", live_demo: "http://devita-watchs.vercel.app/" },
  { image: "/projects/kindertales.png", title: "Kindertales",
    description: "Kindertales provides software that helps daycare businesses manage their entire childcare center—from staff and children to finances and operations—in one place.",
    tags: ["React"], live_demo: "https://www.kindertales.com/" },
  { image: "/projects/hudl.png", title: "AI-Powered Volleyball Stats for Development and Recruiting",
    description: "The website of Hudl provides AI-powered sports analytics tools that analyze game videos and generate performance statistics to help athletes and teams improve and support recruiting.",
    tags: ["React"], live_demo: "https://auth.balltime.com/" },
  { image: "/projects/coffee.png", title: "Coffee shop template",
    description: "Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast.",
    tags: ["HTML","CSS","Bootstrap","Javascript"],
    github: "https://github.com/anna-nova98/Coffee-shop.git", live_demo: "https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap/" },
  { image: "/projects/realworld.png", title: "RealWorld",
    description: "RealWorld is a reference full-stack application specification that implements a Medium.com–like blogging platform with full CRUD, user authentication, profiles, and feed features.",
    tags: ["React","Angular","Django","Node.js"],
    github: "https://github.com/anna-nova98/realworld", live_demo: "https://docs.realworld.show/" },
  { image: "/projects/python-sample.png", title: "Host, run, and code Python in the cloud!",
    description: "A full-stack boilerplate integrating Django with React and Tailwind CSS, including modern frontend workflows and backend APIs with session/cookie handling.",
    tags: ["Python","Django","Django REST Framework","React","Tailwind CSS"],
    github: "https://github.com/anna-nova98/Django-React-Tailwindcss-Boilerplate.git", live_demo: "https://www.pythonanywhere.com/" },
];

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-500">Here are some of my recent projects that showcase my skills and experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ image, title, description, tags, github, live_demo, index }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      <div className="h-56 overflow-hidden">
        <motion.img
          src={image} alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-rose-100 text-rose-500 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm">
          {live_demo && (
            <a href={live_demo} className="flex items-center gap-2 text-rose-500 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {github && (
            <a href={github} className="flex items-center gap-2 text-gray-600 hover:text-black">
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
