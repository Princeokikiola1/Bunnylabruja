import React from "react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SpellBookingUI() {
    const navigate = useNavigate();
  return (
    <div className="bg-black text-white w-full min-h-screen">
      {/* Header */}
      <header className="text-center py-6">
        {/* Title on top */}
        <h1 className="mb-4 text-2xl font-bold text-red-500">Bunny La Bruja</h1>

        {/* Rectangular image below */}
        <img
          src="/talking.webp"
          alt="Bunny La Bruja"
          className="mx-auto w-94 h-60 rounded-lg  object-cover shadow-lg"
        />
      </header>

      {/* Top CTA Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {/* Card 1 */}
        <Card
          className="relative overflow-hidden rounded-xl shadow-xl aspect-square"
          style={{
            backgroundImage: `url(${card1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <CardContent className="relative z-10 p-8 flex flex-col h-full justify-between">
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
              Book me for your next spell!
            </h2>

            <div className="flex justify-end">
              <Button  onClick={() => navigate("/shop")}
                className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold 
                           rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.8)] 
                           hover:shadow-[0_0_35px_rgba(220,38,38,1)] hover:scale-110 transition"
              >
                Order now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          className="relative overflow-hidden rounded-xl shadow-xl aspect-square"
          style={{
            backgroundImage: `url(${card2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <CardContent className="relative z-10 p-8 flex flex-col h-full justify-between">
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
              Book a tarot reading or spell consultation with me!
            </h2>

            <div className="flex justify-end">
              <Button whatsappLink="https://wa.me/message/6UEZI47SDGS5A1"

                className="relative px-6 py-3 bg-gradient-to-r from-red-500 to-black text-white font-bold 
                           rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.8)] 
                           hover:shadow-[0_0_35px_rgba(239,68,68,1)] hover:scale-110 transition"
              >
                Schedule Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Flash Sale Banner */}
      <div
        className="relative text-center text-white font-bold py-6 mt-8 text-lg tracking-wide shadow-md"
        style={{
          backgroundImage: "url('/month.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <span className="relative z-10">🚨 MONTH OF LOVE FLASH SALE 🚨</span>
      </div>

      {/* Sale Details with Swing Animation */}
      <motion.div
        className="bg-red-200 text-center text-black font-bold py-4 text-2xl"
        
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        25% OFF FOR SPELL WORK ONLY! ONLY FOR PAYMENT METHOD ORDERS (DIRECT PAYMENTS)
        (PAYPAL, CASHAPP, APPLE PAY, ZELLE)
      </motion.div>

      {/* Extra Info Section */}
      <div className="bg-black text-white text-center px-6 py-6 leading-relaxed text-sm md:text-base">
        <p>
          I try to do these sales as often as I can because I know a lot of you like to
          use payment methods, but it helps me out just as much! :)
        </p>
        <br />
        <p>
          As Shopify takes a cut from every sale and pays me out a couple times a week in
          increments, it's always nice to do a sale and get paid directly — as much as
          I'm sure you guys enjoy a sale!
        </p>
        <br />
        <p>
          I’ll be extending the sale an extra day or 2 as you can see by the timer, when
          it runs out that will be it for the flash sale, so take advantage! ✨
        </p>
        <br />
        <p className="text-red-500 font-bold mt-4">
          TO BOOK DIRECTLY WITH ME FOR THIS SALE, REACH OUT TO MY BUSINESS LINE AT <br />
        Number:  +1 (951) 543-3915 Or Email:   Bunnylabruja1@gmail.com
        </p>
      </div>

      {/* Customer Form Section */}
      <section
        className="relative py-12 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/forcontact.webp')" }}
      >
        {/* Swinging Customer Form Notice */}
        <motion.div
          className="bg-red-500 text-white text-center font-bold py-4 px-6 text-lg rounded-md shadow-lg mb-6"
          
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          CUSTOMER FORM: PLEASE COME BACK AND FILL OUT THIS PAGE AFTER ORDERING. 
          (Or keep scrolling to learn about my spell work & process!)
        </motion.div>

        <div className="max-w-3xl mx-auto bg-red-200 p-8 rounded-xl text-black shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">Custom Working Information</h2>

          <form className="space-y-6">
            {/* Confirm Your Order Details */}
            <h3 className="text-lg font-semibold">Confirm Your Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" required className="p-2 border rounded w-full" />
              <input type="text" placeholder="Last Name *" required className="p-2 border rounded w-full" />
            </div>

            <div>
              <label className="block font-bold mb-2">
                Have you already paid for/purchased your custom working? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="paid" required /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="paid" required /> No
                </label>
              </div>
            </div>

            <input
              type="text"
              placeholder="Your Shopify Order # (4 digits)"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Best # to reach you (Phone Number OR WhatsApp) *"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full p-2 border rounded"
            />

            {/* Customize Your Working */}
            <h3 className="text-lg font-semibold">Customize Your Working</h3>
            <p className="text-sm text-gray-700">
              (Situation/Intentions/Targets)
            </p>

            {/* Optional Upload */}
            <div>
              <label className="block font-bold mb-2">
                Situation/Intentions Video/Audio Recording (Optional)
              </label>
              <input type="file" accept="audio/*,video/*" className="w-full p-2 border rounded" />
            </div>

            <textarea
              placeholder="Situation - Please describe your issues/reason for spell work."
              className="w-full p-2 border rounded h-24"
            ></textarea>
            <textarea
              placeholder="Intentions - Your wants, needs, desires..."
              className="w-full p-2 border rounded h-24"
            ></textarea>

            {/* Upload Pictures */}
            <div>
              <label className="block font-bold mb-2">
                Upload pictures/files (if applicable)
              </label>
              <input type="file" multiple className="w-full p-2 border rounded" />
            </div>

            {/* Date of Birth */}
            <input
              type="date"
              placeholder="Your Date of Birth *"
              required
              className="w-full p-2 border rounded"
            />

            {/* Target Section */}
            <input
              type="text"
              placeholder="Target’s Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Target’s DOB"
              className="w-full p-2 border rounded"
            />

            {/* 3rd Party Section */}
            <input
              type="text"
              placeholder="3rd Party Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="3rd Party DOB"
              className="w-full p-2 border rounded"
            />

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <span className="text-sm">
                I agree to receive SMS messages from BunnyLaBruja.com, including updates,
                reminders, and occasional promotional messages. Message frequency may vary.
                Standard message & data rates may apply. Reply HELP to (954) 799-4860 for
                support or STOP to unsubscribe.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <span>I agree to the terms and conditions.</span>
            </div>

            {/* Submit */}
            <Button className="bg-red-500 hover:bg-red-400 w-full py-3 text-lg font-bold">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* About Spell Work */}
      <section
        className="px-6 py-12 max-w-5xl mx-auto bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: "url('/aboutspell.webp')" }}
      >
        {/* Heading on top of image */}
        <h2 className="text-center text-3xl font-extrabold text-red-500 mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">
          About My Spell Work
        </h2>

        {/* Text container with black background */}
        <div className="bg-black bg-opacity-90 text-gray-200 p-6 md:p-10 rounded-lg border-2 border-red-700 shadow-[0_0_20px_rgba(255,0,0,0.6)] leading-relaxed text-sm md:text-base space-y-4">
          <p>
            ALL my spell work is customized, as all spell work should be. If you've spoken
            to me before you probably know how much I really dislike calling my spell work
            "customized" but because of all these one-size-fits-all, generic spells taking
            over social media, I feel it's necessary to label my work as customized and
            educate a bit on how spell work works!
          </p>
          <p>
            Everyone's situation and/or person is entirely different, so it's near
            impossible for everyone's work to look the same. It's important your spell
            work is firstly: Based off the "issues" at hand. (Typically these are the
            reasons you're getting spell work to begin with.)
          </p>
          <p>
            For the best results, targeting issues is key. For example, doing an obsession
            spell while ignoring serious communication problems might make someone think
            about you constantly, but still not reach out. That’s why I always address
            blockages directly so results aren’t hindered.
          </p>
          <p>
            Secondly, your intentions—your wants, needs, desires—are just as important!
            Together, these two (issues + intentions) form the basis of your spell work,
            ensuring the results are meaningful and tailored to you.
          </p>
          <p>
            <strong>How Does Purchasing A Spell From Me Work?</strong><br />
            After purchasing and filling out your info, I’ll reach out to confirm your
            intentions & details. Depending on your situation, I’ll adjust and customize
            as needed to get you the best possible results. That’s why the survey is
            crucial!
          </p>
          <p>
            I send <span className="text-red-500 font-bold">VIDEO PROOF</span> of all
            spell work. Please always fill out your number for the fastest communication,
            as emails may take 1-3 business days.
          </p>
          <p>
            I’m available 1pm–10pm EDT on weekdays (sometimes late for clients, but not
            guaranteed on weekends or holidays). Wait times for spell completion are
            typically 1–5 days depending on how booked I am.
          </p>
          <p>
            <strong>Updates:</strong> My updates are done in rotation every 4–5 days,
            usually on weekends. Updates include video proof, wax readings (if requested),
            and explanations. This system keeps wait times short for spell completion
            while giving me space to read and interpret results properly.
          </p>
          <p>
            If you don’t want a wax reading, you can request a simpler update. But I
            strongly recommend them—they reveal how the spell hit, possible outcomes, and
            what to expect.
          </p>
          <p className="text-red-400 font-bold text-center">
            Respect my rotation system — it ensures I don’t overwork, and that YOUR
            spells are done quickly & effectively. 
          </p>
        </div>
      </section>

      {/* Purchasing Section */}
      <section className="bg-black text-white px-6 py-12 max-w-4xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-red-500 mb-8">
          How Does Purchasing A Spell From Me Work?
        </h2>

        <ul className="list-disc list-inside space-y-6 text-sm leading-relaxed text-gray-300">
          <li>
            After purchasing a spell and filling out your contact info, I will reach out
            to confirm. I provide guidance on writing your intentions & explaining your
            situation so you get the best results possible.  
            <span className="text-red-500 font-bold">
              THEREFORE, THE SURVEY IS IMPORTANT TO FILL OUT THOROUGHLY.
            </span>
          </li>

          <li>
            I SEND <span className="text-red-500 font-bold">VIDEO PROOF</span> OF ALL
            SPELL WORK!
          </li>

          <li>
            Always fill out the info above to create a contact with your order in my CRM.
            Include your number for the fastest communication (emails may take 1–3
            business days).
          </li>

          <li>
            Availability: <span className="text-red-500">1pm–10pm EDT (weekdays)</span>.
            Exceptions made for current clients. Expect slower responses on weekends &
            holidays (mom life 💕).
          </li>

          <li>
            <strong>📞 Important:</strong> My help line (
            <span className="font-mono">(754) 715-7095</span>) gets many messages. My
            business number is for current clients only (priority replies). Help line
            texts may take up to a week.
          </li>
        </ul>

        <h3 className="text-lg font-bold text-red-500 mt-10 mb-4">⏳ Wait Times</h3>
        <ul className="list-disc list-inside space-y-4 text-sm leading-relaxed text-gray-300">
          <li>
            Typical wait: <span className="font-bold">1–5 days</span>, depending on how
            booked I am.  
            <span className="text-red-500 font-bold">Never more than 5 days!</span>
          </li>
          <li>
            Same-day expedite is possible (small fee if booked out).
          </li>
        </ul>

        <h3 className="text-lg font-bold text-red-500 mt-10 mb-4">🔄 My Update System</h3>
        <ul className="list-disc list-inside space-y-4 text-sm leading-relaxed text-gray-300">
          <li>
            Updates are done in <span className="font-bold">rotation every 4–5 days</span>,
            usually weekends.
          </li>
          <li>
            Updates include video proof + wax readings (if requested).
          </li>
          <li>
            Wax readings can take 10–30+ minutes depending on complexity, so I dedicate
            specific days just for updates.
          </li>
          <li>
            If you prefer <span className="font-bold">no wax reading</span>, you can
            request a simpler update. You’ll still receive proof of working after your
            spell is complete.
          </li>
        </ul>

        <p className="text-red-400 font-bold text-center mt-8">
          Please respect my rotation system — it ensures high-quality work, faster
          results, and prevents burnout. 
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-center py-6 mt-12">
        <p className="text-sm">© 2025 Bunny La Bruja - All Rights Reserved</p>
      </footer>
    </div>
  );
}
