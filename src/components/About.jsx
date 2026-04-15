import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const vp  = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1];

const jobs = [
  { title: "Senior Web Developer", date: "March 2025 - Present",
    items: ["Design and implement web applications", "Build scalable solutions using React, Node.js, REST APIs", "Collaborate in international teams"] },
  { title: "Web Developer", location: "Shanghai, China", date: "June 2022 - February 2025",
    items: ["Developed and maintained web applications", "Optimized UI/UX and performance", "Applied university knowledge in production"] },
  { title: "Junior Web Developer", location: "Shanghai, China", date: "June 2019 - May 2022",
    items: ["Assisted in coding and debugging", "Contributed to UI and backend functionality", "Built foundational technical skills"] },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="text-4xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-500">My journey as a developer and my professional background</p>
        </motion.div>

        {/* Profile Box */}
        <motion.div
          className="bg-rose-50 border border-rose-200 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-start gap-4">
            <MapPin className="text-rose-500 mt-1 shrink-0" size={20} />
            <div>
              <h3 className="font-semibold mb-2">Profile</h3>
              <p className="text-gray-700 leading-relaxed">
                I am a full-stack developer with over 6 years of experience building scalable web applications.
                I have extensive experience with frontend frameworks such as React and Vue, backend development using Node.js, Express, NestJS, PHP, and Python, and databases such as PostgreSQL and MongoDB.
                I am passionate about writing clean and efficient code and integrating AI solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.45, ease }}
          >
            <Briefcase className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </motion.div>

          <div className="space-y-10 border-l border-rose-200 pl-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                {/* Timeline dot */}
                <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-rose-400 border-2 border-white" />

                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold">{job.title}</h4>
                    {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                  </div>
                  <span className="text-sm text-gray-500">{job.date}</span>
                </div>
                <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                  {job.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.45, ease }}
          >
            <GraduationCap className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Education</h3>
          </motion.div>

          <div className="border-l border-rose-200 pl-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, ease }}
            >
              <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-rose-400 border-2 border-white" />
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-semibold">Shanghai Dianji University</h4>
                  <p className="text-sm text-gray-500">Shanghai, China</p>
                </div>
                <span className="text-sm text-gray-500">September 2018 - June 2022</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
