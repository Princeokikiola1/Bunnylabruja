import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPage() {
  const gallery = [
    "/custom1.jpg",
    "/custom2.jpg",
    "/custom3.jpg",
  ];

  const [mainImage, setMainImage] = useState(gallery[0]);
  const [selected, setSelected] = useState("Traditional Love/Sweetening");

  const spells = {
    "Traditional Love/Sweetening": {
      price: 350,
      desc: `A traditional love spell is considered light working (white magic).
      Best for sweetening relationships, healing toxic cycles, and restoring harmony.
      Ideal if you’re already in a relationship but want forgiveness, softness,
      or more loving energy flowing between you.`,
    },
    "Obsession Spell": {
      price: 450,
      desc: `Obsession work is gray magic — heavier and deeper than love sweetening.
      It’s excellent for reconciliation, reigniting passion, and no-contact situations.
      This working pulls someone’s mind, energy, and thoughts toward you intensely,
      making them crave closeness and attention.`,
    },
    "Domination Spell": {
      price: 480,
      desc: `A darker form of work where you take control energetically.
      Best used when you want authority, influence, and compliance.
      The target feels compelled to act in alignment with your will,
      bending situations strongly in your favor.`,
    },
    Binding: {
      price: 630,
      desc: `Binding spells tie individuals together energetically.
      They ensure the connection cannot be easily broken or severed.
      This is perfect for long-term relationships, karmic bonds,
      or situations where you don’t want someone slipping away.`,
    },
    "Break Up Hex / 3rd Party Removal": {
      price: 600,
      desc: `This is targeted magic used to separate couples,
      remove third parties, and break destructive attachments.
      It clears away people blocking your love path, destroying interference
      so you can have clarity and space with your person.`,
    },
    "Sex Spells": {
      price: 540,
      desc: `Sexual energy workings heighten physical attraction and intimacy.
      They restore passion in stale connections, ignite chemistry,
      and amplify desire between you and your target.`,
    },
    "Attraction Spell": {
      price: 710,
      desc: `Draw attention, admirers, and opportunities effortlessly.
      Attraction work boosts your magnetic pull so others notice you,
      whether for love, romance, or social charm. Perfect if you want
      to feel irresistible to those around you.`,
    },
    "Illusion Spell": {
      price: 360,
      desc: `Illusion workings bend perceptions — influencing how others see you.
      It can make you appear more desirable, trustworthy, or irresistible,
      shifting perspectives in your favor and shaping outcomes subtly.`,
    },
  };

  const current = spells[selected];

  // WhatsApp checkout handler
  const handleCheckout = () => {
    const whatsappUrl = `https://wa.me/message/6UEZI47SDGS5A1?text=${encodeURIComponent(
      `I want to order the "${selected}" spell.\nPrice: $${current.price.toFixed(
        2
      )}\nSelected Image: ${mainImage}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center px-4 py-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        
        {/* --- Left Column (Gallery) --- */}
        <div className="md:w-1/3 flex flex-col items-center">
          <motion.img
            key={mainImage}
            src={mainImage}
            alt="Main"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-md shadow-lg border border-gray-700"
          />
          <div className="flex gap-3 mt-4">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-lg object-cover cursor-pointer transition-all duration-300 
                  ${mainImage === img 
                    ? "border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]" 
                    : "border border-gray-700 hover:border-red-400 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* --- Right Column --- */}
        <div className="md:w-2/3">
          {/* Page Title */}
          <motion.h1
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent text-center md:text-left mb-6"
          >
            Choose Your Custom Working
          </motion.h1>

          {/* Price */}
          <motion.p
            key={current.price}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold text-gray-200 mt-4 text-center md:text-left"
          >
            ${current.price.toFixed(2)}
          </motion.p>

          {/* Dropdown */}
          <label className="block text-gray-300 mt-6 mb-2 font-semibold text-sm">
            Select a Spell
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-xl shadow-md focus:ring-2 focus:ring-red-500 transition"
          >
            {Object.keys(spells).map((spell) => (
              <option key={spell}>{spell}</option>
            ))}
          </select>

          {/* Add to Cart (Now goes to WhatsApp) */}
          <motion.button
            onClick={handleCheckout}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(239,68,68,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white w-full py-3 mt-6 rounded-xl font-bold tracking-wide shadow-lg"
          >
            Add to Cart
          </motion.button>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 text-gray-300 leading-relaxed space-y-4 p-6 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-xl font-bold text-red-400">{selected}</h2>
              <p>{current.desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* Global Sections */}
          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-pink-400 mb-2">✨ What to Expect</h3>
              <p className="text-gray-400 leading-relaxed">
                Each custom working is crafted with careful energy alignment.
                You may feel emotional shifts, signs in dreams, or synchronicities
                around your target. Results can appear quickly or gradually, depending
                on your unique circumstances and energetic resistance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">⚖ Refund Policy</h3>
              <p className="text-gray-400 leading-relaxed">
                Once a ritual has been cast, refunds are not possible as energy
                has already been set in motion. Please be sure before you order.
                You are investing in spiritual work, not a guaranteed outcome —
                results vary and depend on multiple energetic factors.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-300 mb-2">⚠ Disclaimer</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                These services are for spiritual and entertainment purposes only.
                Outcomes are not guaranteed and may vary. By purchasing,
                you acknowledge responsibility for your choices and the
                consequences of spiritual work. Not a substitute for legal,
                medical, or financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
