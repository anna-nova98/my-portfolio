import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { showSuccess, showError } from "./Toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showError("Please fill in all fields before sending!");
      return;
    }

    const templateParams = { name, email, message };
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
          
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        showSuccess("Message sent successfully!");
        setName(""); setEmail(""); setMessage("");
      })
      .catch(() => {
        console.log(SERVICE_ID,"SERVICE_ID");
        console.log(TEMPLATE_ID,"TEMPLATE_ID");
        console.log(PUBLIC_KEY,"PUBLIC_KEY");
        showError("Failed to send message. Try again!");
      });
  };

  return (
    <>
      <motion.section className="bg-[#f5f5f5] py-20 px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} id="contact">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-500">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
              <ContactInfo icon={<Mail size={20} />} title="Email" text="annanova0908@mail.ru" />
              <ContactInfo icon={<Phone size={20} />} title="Phone" text="+7 981 879 5598" />
              <ContactInfo icon={<MapPin size={20} />} title="Location" text="Saint Petersburg, Russia" />
            </motion.div>

            <motion.div className="bg-white rounded-2xl shadow-md p-8" initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <InputField label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                <InputField label="Email" placeholder="your.email@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextAreaField label="Message" placeholder="Tell me about your project..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">Send Message</motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <footer className="bg-[#0f172a] text-center py-6 text-gray-300 text-sm">
        <p>Made with <span className="text-rose-500">❤</span> by Anna Nova</p>
        <p className="mt-1 text-gray-400">© All rights reserved.</p>
      </footer>
    </>
  );
}

function ContactInfo({ icon, title, text }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
      <div className="bg-rose-100 text-rose-500 p-3 rounded-lg">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </motion.div>
  );
}

function InputField({ label, placeholder, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <motion.input type={type} placeholder={placeholder} value={value} onChange={onChange} whileFocus={{ scale: 1.02 }} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all duration-200" />
    </div>
  );
}

function TextAreaField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <motion.textarea rows="4" placeholder={placeholder} value={value} onChange={onChange} whileFocus={{ scale: 1.02 }} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all duration-200" />
    </div>
  );
}