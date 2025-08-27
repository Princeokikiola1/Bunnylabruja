import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

const allServices = [
  { id: 1, name: "Book a reading with us.", duration: "30 mins", price: "$40" },
  { id: 2, name: "Book a reading with us.", duration: "1 hr", price: "$55.55" },
  { id: 3, name: "Spiritual Coaching Session With Brigitte.", duration: "1 hr", price: "$66.66" },
  { id: 4, name: "Spiritual Coaching Session with Bunny.", duration: "1 hr", price: "$80" },
  { id: 5, name: "Spell consultation", duration: "1 hr", price: "$66.66" },
  { id: 6, name: "Spell Consultation", duration: "30 mins", price: "$40" },
];

const owners = [
  {
    id: 1,
    name: "Bunny @BunnyLaBruja",
    img: "/aboutspell.webp",
    desc: `Bunny is a seasoned practitioner who blends ancestral wisdom with modern spiritual practices. 
           Specializing in spell work, tarot, and energy alignment, she guides clients through transformation 
           with compassion and clarity. Bunny’s readings are known for their depth and her rituals are crafted 
           to bring balance, healing, and empowerment.`,
  },
  {
    id: 2,
    name: "Brigitte @Taijitu.Doll.Rituals",
    img: "/card2.webp",
    desc: `Brigitte is a spiritual coach and ritualist, deeply rooted in the sacred balance of yin and yang. 
           Her sessions weave together divination, coaching, and ceremonial work to help seekers uncover 
           their inner strength. Whether you’re in need of guidance, clarity, or empowerment, Brigitte’s 
           offerings create space for true spiritual alignment.`,
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const displayedServices = activeTab === "all" ? allServices : allServices;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center pt-28 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide mb-6"
        >
          BOOK A SERVICE FROM OUR BOTANICA
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 text-sm uppercase font-semibold">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-1 transition ${
              activeTab === "all"
                ? "text-red-500 border-b-2 border-red-600"
                : "hover:text-red-400"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`pb-1 transition ${
              activeTab === "services"
                ? "text-red-500 border-b-2 border-red-600"
                : "hover:text-red-400"
            }`}
          >
            Services
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mb-20">
        {displayedServices.map((s) => {
          const whatsappLink = `https://wa.me/message/6UEZI47SDGS5A1?text=${encodeURIComponent(
            `Hello, I would like to book the following service:\n\n📖 Service: ${s.name}\n🕒 Duration: ${s.duration}\n💲 Price: ${s.price}\n\nPlease confirm availability.`
          )}`;

          return (
            <motion.div
              key={s.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-neutral-900 rounded-2xl shadow-lg p-6 text-center border border-neutral-800 transition"
            >
              <h3 className="font-medium text-lg mb-2">{s.name}</h3>
              <p className="text-sm text-gray-400 mb-1">{s.duration}</p>
              <p className="text-red-500 font-semibold mb-4">{s.price}</p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-md font-semibold text-sm"
              >
                BOOK
              </a>
            </motion.div>
          );
        })}
      </section>
{/* Our Spiritual Guides Section */}
{/* Our Spiritual Guides Section */}
<section className="max-w-6xl mx-auto px-6 mb-20">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
  >
    Our Spiritual Guides
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {owners.map((o) => (
      <motion.div
        key={o.id}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="group flex flex-col md:flex-row bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Image with gradient overlay */}
        <div className="relative h-56 md:h-auto md:w-1/3">
          <img
            src={o.img}
            alt={o.name}
            className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <h3 className="text-xl font-semibold mb-3 text-red-400">{o.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed flex-1">{o.desc}</p>

          {/* Social / CTA buttons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/message/6UEZI47SDGS5A1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 transition"
            >
              Contact
            </a>
         <a
  href="mailto:Bunnylabruja1a@gmail.com?subject=Service%20Booking%20Inquiry"
  className="px-4 py-2 rounded-lg text-sm font-medium bg-neutral-800 hover:bg-neutral-700 transition"
>
  Email
</a>

          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-8 text-center text-sm text-gray-400">
        <p>© 2025 Inferno Botanica — All Rights Reserved.</p>
        <div className="space-x-6 mt-2">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
        </div>
        <p className="mt-3 text-xs tracking-wide text-gray-500">Powered by Bunnylabruja</p>
      </footer>
    </div>
  );
}
