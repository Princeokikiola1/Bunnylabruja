import LinkButton from "../components/LinkButton";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

export default function LinkTreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex flex-col items-center text-white relative overflow-hidden px-4">
      {/* 🌌 Floating Animated Background */}
      {[
        { src: "/butterfly.webp", alt: "butterfly", className: "top-6 left-6 w-20 animate-[float_6s_ease-in-out_infinite,spin_20s_linear_infinite]" },
        { src: "/lips.webp", alt: "lips", className: "top-10 right-8 w-16 animate-[float_8s_ease-in-out_infinite,spin_18s_linear_infinite]" },
        { src: "/lip.webp", alt: "lip", className: "bottom-12 left-8 w-16 animate-[float_7s_ease-in-out_infinite,spin_22s_linear_infinite]" },
        { src: "/eye.webp", alt: "eye", className: "top-1/4 right-4 w-14 animate-[float_9s_ease-in-out_infinite,spin_25s_linear_infinite]" },
        { src: "/lollipop.webp", alt: "lollipop", className: "bottom-28 right-10 w-12 animate-[float_5s_ease-in-out_infinite,spin_19s_linear_infinite]" },
        { src: "/download (1).webp", alt: "flower", className: "top-2/3 left-4 w-14 animate-[float_11s_ease-in-out_infinite,spin_21s_linear_infinite]" },
        { src: "/download (2).webp", alt: "sparkle", className: "bottom-10 right-20 w-10 animate-[float_10s_ease-in-out_infinite,spin_17s_linear_infinite]" },
        { src: "/bandage.webp", alt: "bandage", className: "top-1/3 left-10 w-10 animate-[float_12s_ease-in-out_infinite,spin_16s_linear_infinite]" },
        { src: "/download (2).webp", alt: "crystal", className: "bottom-1/4 right-1/4 w-14 animate-[float_14s_ease-in-out_infinite,spin_24s_linear_infinite]" },
        { src: "/download (2).webp", alt: "moon", className: "top-16 right-1/3 w-16 animate-[float_15s_ease-in-out_infinite,spin_26s_linear_infinite]" },
      ].map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`absolute ${img.className}`}
        />
      ))}

      {/* 🌟 Profile Section */}
      <div className="mt-24 flex flex-col items-center text-center relative z-10">
        <div className="relative">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.7)] object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-2xl"></div>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-red-500 via-white to-red-700 bg-clip-text text-transparent drop-shadow-md animate-pulse">
          Bunny La Bruja
        </h2>
        <p className="text-sm text-gray-300 mt-2 leading-relaxed max-w-sm">
          Practitioner with <span className="text-red-400">10+ years experience</span>,  
          guiding you through spellwork, healing & spiritual awareness 🕯️✨🧿
        </p>
        <p className="mt-4 font-bold text-red-400 tracking-wide animate-pulse text-center">
          📞 Direct Line: ‪+1 (951) 543-3915‬
        </p>
      </div>

      {/* 🔗 Link Buttons */}
      <div className="mt-12 flex flex-col gap-4 w-full max-w-md relative z-10">
        <LinkButton
          text="Book Spell Work or Readings"
          url="/Bookings"
          icon={<BsBook />}
        />
        <LinkButton
          text="My Botanica – Spiritual Supplies"
          url="/inferno"
        />
        <LinkButton
          text="My Whatsapp"
          url="https://wa.me/message/6UEZI47SDGS5A1"
          icon={<FaWhatsapp />}
        />
        <LinkButton
          text="TikTok"
          url="https://www.tiktok.com/@bunny_labruja?_t=ZM-8zBARRaqBBm&_r=1"
          icon={<FaTiktok />}
        />
      </div>

      {/* ⚡ Footer */}
      <footer className="mt-20 text-center text-xs text-gray-400 relative z-10">
        <p className="mb-2 tracking-wider text-red-400">✦ Linktree ☯ ✦</p>
        <p className="space-x-6">
          <a href="#" className="hover:text-red-400 transition">Report</a>
          <a href="#" className="hover:text-red-400 transition">Privacy</a>
        </p>
        <p className="mt-4">
          <button className="bg-gradient-to-r from-red-600 to-black px-5 py-1.5 rounded-full text-xs font-medium shadow-[0_0_12px_rgba(239,68,68,0.7)] hover:scale-105 transition">
            linktr.ee/you
          </button>
        </p>
        <p className="mt-3 text-gray-500">
          Join <span className="text-red-400">bunnylabruja</span> on Linktree today
        </p>
      </footer>

      {/* 📲 QR Code */}
      <img
        src="/qrcode.png"
        alt="QR Code"
        className="absolute bottom-6 right-6 w-20 hover:scale-110 transition"
      />

      {/* 🎭 Custom Floating + Spin Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
