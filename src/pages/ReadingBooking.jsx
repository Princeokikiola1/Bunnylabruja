import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarCustom.css"; // ✅ custom CSS overrides

export default function ReadingBooking() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  const images = ["/reading1.png", "/reading2.jpg"];

  const timeSlots = {
    Morning: ["9:00 AM", "10:30 AM", "11:30 AM"],
    Afternoon: ["1:00 PM", "2:30 PM", "4:00 PM"],
    Evening: ["6:00 PM", "7:30 PM", "9:30 PM"],
  };

  const handleBooking = () => {
    if (!time) {
      alert("Please select a time slot.");
      return;
    }

    const formattedDate = date.toDateString();
    const message = `Hi, I booked a pre-paid consultation for ${formattedDate} at ${time}.`;
    const whatsappLink = `https://wa.me/message/6UEZI47SDGS5A1?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      {/* Header */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-red-600">
        Book Your Consultation Now
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <div className="flex flex-col items-center">
          <img
            src={images[activeImage]}
            alt="Main"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  activeImage === idx ? "border-red-500" : "border-gray-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Consultation Info */}
        <div className="space-y-6">
          {/* Title + Price */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Custom 1-on-1 Consultation + Reading
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              2–3 Hours + 50% Off any working
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="line-through text-gray-400 text-lg">$499</span>
              <span className="text-3xl font-bold text-white">$399</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            Includes 50% off any working you choose after your session. Over
            2–3 hours, Bunny will personally guide you through a full reading
            and consultation to uncover truths, answer your questions, and
            provide clarity and alignment.
          </p>

          {/* Add to Cart */}
          <button
            onClick={handleBooking}
            className="w-full py-3 rounded-lg font-bold text-white bg-red-600 hover:bg-red-500 transition"
          >
            Add to Cart
          </button>

          {/* Notes Section */}
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <h3 className="font-bold text-yellow-400 mb-1">
                ✨ A Few Notes Before Booking
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Consultations are not rushed (2–3 hrs).</li>
                <li>Available via Phone or Video/Voice message (your choice).</li>
                <li>Please book only when ready to move forward with spellwork.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-red-500 mb-1">❌ Refund Policy</h3>
              <p>
                Refunds available if requested before session is completed. A $20
                processing fee applies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-700"></div>

      {/* Calendar + Time Slots */}
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          Select Date & Time
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar */}
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            className="custom-calendar"
          />

          {/* Time Slots */}
          <div>
            <h3 className="text-lg font-semibold mb-2">⏰ Available Times</h3>
            <div className="space-y-3">
              {Object.entries(timeSlots).map(([period, slots]) => (
                <div key={period}>
                  <p className="text-red-400 font-bold mb-1">{period}</p>
                  <div className="flex flex-wrap gap-2">
                    {slots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTime(slot)}
                        className={`px-4 py-2 rounded-md text-sm ${
                          time === slot
                            ? "bg-red-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleBooking}
          className="mt-6 w-full py-3 rounded-lg font-bold bg-gradient-to-r from-red-500 to-black hover:scale-105 transition"
        >
          Confirm Booking
        </button>
      </div>

      {/* Footer Notice */}
      <p className="text-center mt-10 text-red-400 font-semibold">
        🚨 Important: Do not book a consultation before purchasing. Unauthorized
        bookings will be blocked.
      </p>
    </div>
  );
}
