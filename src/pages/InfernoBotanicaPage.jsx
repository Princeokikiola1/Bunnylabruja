import React from "react";
import CandleDressingSection from "../components/CandleDressingSection";
import { motion } from "framer-motion";
import { Star, Flame, BookOpen, Moon } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";



export default function InfernoBotanicaPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white font-sans">
       <Navbar />
      {/* Hero Section */}
   <motion.section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 pt-24 bg-gradient-to-b from-black via-red-950 to-black overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Image with floating effect */}
      <motion.div
        className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/hero.jpeg"
          alt="Hero candles"
          className="rounded-3xl shadow-2xl object-cover w-full h-[60vh] lg:h-[75vh] border-4 border-red-900/40"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="lg:w-1/2 p-6 text-center lg:text-left relative z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent leading-snug drop-shadow-md">
          AUTHENTIC SPIRITUAL SUPPLIES THAT EMPOWER ALL SPIRITUAL JOURNEYS.
        </h1>

        <p className="mb-6 text-base lg:text-lg text-gray-300 leading-relaxed">
          Whether you practice a craft already, or are just getting into spirituality,  
          we have spiritual supplies for every part of your journey.
        </p>

         <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 25px rgba(220, 38, 38, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/shop")}
      className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
    >
      SHOP OUR BOTANICA
    </motion.button>
      </motion.div>

      {/* Subtle glowing orbs in background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-800/20 rounded-full blur-3xl animate-pulse"></div>
    </motion.section>
<motion.section
  className="relative min-h-[70vh] flex items-center justify-center text-center text-white px-6 lg:px-20 py-20 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  {/* Gradient Overlay for depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl">
    <motion.h2
      className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-red-600 to-red-800 bg-clip-text text-transparent"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Keep Scrolling to Learn About Inferno Botanica
    </motion.h2>

    <motion.p
      className="text-lg lg:text-xl mb-12 text-gray-300 leading-relaxed"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Our services include personalized ritual kits, candle dressing, and more.  
      <br />
      <span className="text-red-400 font-semibold">
        If you are looking for spell work, spell consultations, or other personal services, 
        please refer to our personal websites & contact info there.
      </span>
    </motion.p>

    {/* Animated Icons Row */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      {[
        { icon: Star, label: "Personalized Ritual Kits" },
        { icon: Flame, label: "Candle Dressing" },
        { icon: BookOpen, label: "Spiritual Guidance" },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.3 }}
          whileHover={{ scale: 1.15 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
            className="p-4 rounded-full bg-red-600/20 shadow-lg shadow-red-900/40"
          >
            <item.icon className="h-14 w-14 text-red-500" />
          </motion.div>
          <p className="mt-4 text-gray-200 font-medium tracking-wide">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

    <CandleDressingSection />
   <motion.section
      id="about"
      className="relative min-h-screen px-6 lg:px-20 py-20 bg-gradient-to-b from-black via-red-950 to-black text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About INFERNO THE BOTANICA
        </motion.h2>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/story.jpeg"
            alt="Inferno Botanica Story"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] border-4 border-red-900/40"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 leading-relaxed lg:pl-8"
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-6">Our Story</h3>
          <p className="mb-4">
            We are a <span className="text-red-400 font-medium">mother and daughter-owned business</span> that strive to
            change the market of the typical botanica, offering people supplies that
            actually have intentions and correlating ingredients.
          </p>
          <p className="mb-4">
            We have both been in the spiritual business for over a decade and have a love
            for the craft—as well as law of attraction, spiritual healing, and self-awareness.
          </p>
          <p className="mb-4">
            We actively work with our clients hands-on but have decided to embark on the
            adventure of starting our own botanica. With both of us having experience
            working in botanicas and selling spiritual supplies over the years, it’s time
            for us to have a botanica we officially call our own.
          </p>
          <p>
            This shop is not only made for people who “practice,” but for{" "}
            <span className="text-red-400 font-medium">ALL fellow humans on this journey called life.</span>
          </p>
        </motion.div>
      </div>

        {/* Row 2 - Our Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 leading-relaxed lg:pr-8 order-2 lg:order-1"
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-6">Our Products</h3>
          <p className="mb-4">
            We offer a wide range of products from spell work supplies, to everyday
            products you can use to better yourself and life in general. The goal of our
            botanica is to reach all types of people and{" "}
            <span className="text-red-400 font-medium">isn’t solely based off “witchcraft.”</span>
          </p>
          <p className="mb-4">
            <span className="font-semibold text-red-400">ALL PRODUCTS ARE HANDMADE</span> or directly shipped with love
            from Colombia, ensuring authenticity and spiritual integrity in every item we
            provide.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <img
            src="/Product.jpeg"
            alt="Inferno Botanica Products"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] border-4 border-red-900/40"
          />
        </motion.div>
      </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/services.jpeg"
            alt="Inferno Botanica Services"
            className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] border-4 border-red-900/40"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 leading-relaxed lg:pl-8"
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-6">Our Services</h3>
          <p className="mb-4">
            You will find our services tab, but our{" "}
            <span className="text-red-400 font-medium">personal services</span> can be
            found on our link trees on any of our social media.
          </p>
          <p className="mb-2">
            <span className="font-semibold text-red-300">Bunny La bruja</span> –{" "}
            <a
              href="https://www.tiktok.com/@bunny_labruja?_t=ZM-8zBARRaqBBm&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-400"
            >
              @Bunny_labruja
            </a>{" "}
            on TikTok & Instagram
          </p>
          <p>
            <span className="font-semibold text-red-300"> Email Or Direct Line On </span> –{" "}
            Number:  +1 (951) 543-3915
Email:Bunnylabruja1@gmail.com
          </p>
        </motion.div>
      </div>


      {/* Decorative glowing orb */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-700/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
    </motion.section>

    {/* 📩 Contact Section */}
<motion.section
  className="py-20 px-6 lg:px-20 relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  {/* Section Title */}
  <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
    Get in Touch!
  </h2>
  <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
    Contact us for any questions or concerns.  
    <span className="text-red-400 font-semibold"> You will get a much faster response on our chat box! </span>  
    This is where you'd get in contact with us about your order(s).
  </p>

  <div className="grid lg:grid-cols-2 gap-12 items-start">
    {/* 📬 Contact Form */}
    <form className="flex flex-col space-y-4 bg-gray-800/40 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
      <motion.input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 transition"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="email"
        placeholder="Your Email"
        className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 transition"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.textarea
        placeholder="Your Message"
        className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 h-32 transition"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(220, 38, 38, 0.7)"
        }}
        className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-black text-white px-6 py-3 rounded-xl font-semibold tracking-wide shadow-lg transition"
      >
        SEND MESSAGE
      </motion.button>
    </form>

    {/* 🕒 Hours Section */}
    <div className="bg-gray-800/40 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-red-400">Inferno Botanica</h3>
      <h4 className="text-lg font-semibold mb-6 text-gray-200">Hours</h4>
      <ul className="space-y-2 text-gray-300">
        <li className="flex justify-between border-b border-gray-700 pb-2">
          <span>Mon</span> <span>09:00 am – 05:00 pm</span>
        </li>
        <li className="flex justify-between border-b border-gray-700 pb-2">
          <span>Tue</span> <span>09:00 am – 05:00 pm</span>
        </li>
        <li className="flex justify-between border-b border-gray-700 pb-2">
          <span>Wed</span> <span>09:00 am – 05:00 pm</span>
        </li>
        <li className="flex justify-between border-b border-gray-700 pb-2">
          <span>Thu</span> <span>09:00 am – 05:00 pm</span>
        </li>
        <li className="flex justify-between border-b border-gray-700 pb-2">
          <span>Fri</span> <span>09:00 am – 05:00 pm</span>
        </li>
        <li className="flex justify-between text-gray-500">
          <span>Sat</span> <span>Closed</span>
        </li>
        <li className="flex justify-between text-gray-500">
          <span>Sun</span> <span>Closed</span>
        </li>
      </ul>
    </div>
  </div>
</motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="py-12 px-6 lg:px-20 bg-gray-900 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">JOIN OUR VIP LIST</h2>
        <p className="mb-6">Get 10% off your first purchase when you sign up for our newsletter!</p>
        <div className="flex justify-center">
          <motion.input
            type="email"
            placeholder="Email"
            className="p-3 rounded-l bg-gray-800 border border-gray-600 focus:border-red-600 focus:ring-2 focus:ring-red-600 w-64"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(220, 38, 38, 0.7)" }}
            className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-r"
          >
            SIGN UP
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-sm border-t border-gray-800">
        <p className="mb-2">Copyright © 2025 Inferno Botanica – All Rights Reserved.</p>
        <p>
          <a href="#" className="text-red-600 hover:underline">
            Privacy Policy
          </a>{" "}
          | {" "}
          <a href="#" className="text-red-600 hover:underline">
            Terms and Conditions
          </a>
        </p>
      </footer>
    </div>
  );
}
