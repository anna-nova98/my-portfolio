import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";

const vp = { once: true, amount: 0.1 };

const cards = [
  { icon: <Code2 size={20} />, title: "Languages",
    skills: ["JavaScript","TypeScript","HTML5","CSS3","SASS/SCSS","SQL","Python","PHP"] },
  { icon: <Layout size={20} />, title: "Frontend",
    skills: ["React","Vue.js","Redux","Vuex","Next.js","Nuxt.js","Tailwind CSS","Bootstrap","Material-UI","UI/UX Optimization","Progressive Web Apps","Web Accessibility","Cross-browser Compatibility"] },
  { icon: <Server size={20} />, title: "Backend",
    skills: ["Node.js","Express","REST APIs","GraphQL","JWT Authentication","Microservices","WebSockets","Server-Side Rendering","API Design","OAuth"] },
  { icon: <Database size={20} />, title: "Databases",
    skills: ["MySQL","MongoDB","PostgreSQL","Redis","Database Design","Query Optimization","Data Modeling","IndexDB"] },
  { icon: <Wrench size={20} />, title: "Tools & Platforms",
    skills: ["Git","GitHub","GitLab","Docker","Webpack","Vite","NPM","Yarn","Postman","VS Code","Jira","Figma","Linux","Nginx","AWS"] },
  { icon: <Sparkles size={20} />, title: "Other Skills",
    skills: ["Performance Optimization","Debugging","Testing","Jest","Cypress","Agile/Scrum","Project Management","Code Review","CI/CD","SEO Optimization","Security Best Practices"] },
];

export default function Skills() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-500">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-100 text-rose-500 p-3 rounded-xl">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {card.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-lg text-gray-600 cursor-default"
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.06 + j * 0.03 }}
                    whileHover={{ backgroundColor: "#fce7f3", color: "#be185d", scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
