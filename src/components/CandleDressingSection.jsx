import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How?",
    answer: `Simply choose the option when checking out the candle you want, before adding to your cart. 
      If you see a section that you must fill out on certain candles, it's because we need to know what 
      you're using the candle for so we know how to dress these for you. Otherwise, you simply just select 
      the option, when it's a candle that has an obvious intention.`,
  },
  {
    question: "How much does it cost?",
    answer: `We offer our candle dressing at a very small fee, but this fee DEPENDS ON THE SIZE OF THE CANDLE/WHAT TYPE OF CANDLE. 
      We charge anywhere from $4, up to $10 on our large candles.`,
  },
  {
    question: "Candle shipping price?",
    answer: `We unfortunately don't even make an extra cent on shipping, our shipping prices go by weight and the zone 
      your delivery address is in; as our site is connected with USPS to calculate the exact cost. 
      We are currently as a small business trying to find the best way to make shipping the most affordable possible.`,
  },
  {
    question: "How do we dress your candles?",
    answer: `We always recommend lightly dressing 7 day glass candles as these are extremely important to read the glass, 
      and being overdressed can make it hard to interpret the outcome of your spell or manifestation. 
      Otherwise, for any other candle, we love to dress them with correlating charms and glitter to make them 
      beautiful, as well as correlating herbs and oils.`,
  },
];

export default function CandleDressingSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      className="py-16 px-6 lg:px-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl lg:text-5xl font-extrabold text-red-600 mb-12">
        CANDLE DRESSING BY US.
      </h2>

      {/* Candle Gallery */}
      <div className="grid md:grid-cols-4 gap-10 mb-16">
        {["/candle1.jpeg", "/candle2.jpeg", "/candle3.jpeg", "/candle4.jpeg"].map(
          (src, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-black/40 p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={src}
                alt="Candle"
                className="w-40 h-40 rounded-full object-cover mb-4 shadow-md shadow-red-800/40"
              />
              <p className="text-gray-300 text-sm">
                Beautifully prepared candles for your rituals & manifestations.
              </p>
            </motion.div>
          )
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-black/50 rounded-xl overflow-hidden border border-red-800/40"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-red-400 hover:text-red-300"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-300 text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
