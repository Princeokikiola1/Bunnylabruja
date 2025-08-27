import { useState, memo } from "react";
import { categories, products as allProducts } from "../data";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const MemoizedNavbar = memo(Navbar);

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortOption, setSortOption] = useState("Most popular");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  // Filter products by category
  const filteredProducts =
    activeCategory === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
    }
    if (sortOption === "Price: High to Low") {
      return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
    }
    if (sortOption === "Newest") {
      return b.id - a.id;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white pt-24">
      <MemoizedNavbar />

      <div className="max-w-7xl mx-auto flex px-6 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-64">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-gray-800 shadow-xl"
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <motion.li
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-red-600/40 to-pink-600/40 text-red-300 border border-red-500 shadow-lg shadow-red-500/30"
                      : "hover:bg-white/5 hover:text-red-400"
                  }`}
                >
                  {cat}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </aside>

        {/* Product Section */}
        <main className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-wide">{activeCategory}</h2>

            {/* Sorting Pills */}
            <div className="flex flex-wrap gap-2">
              {["Most popular", "Price: Low to High", "Price: High to Low", "Newest"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      sortOption === option
                        ? "bg-red-600 text-white shadow-md shadow-red-600/40"
                        : "bg-white/5 border border-gray-700 hover:bg-white/10"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {paginatedProducts.map((p) => {
              const whatsappLink = `https://wa.me/message/6UEZI47SDGS5A1?text=${encodeURIComponent(
                `Hello, I'm interested in purchasing:\n\n📦 Product: ${p.name}\n💲 Price: ${p.price}\n🖼️ Image: ${p.img}\n\nPlease guide me with payment details.`
              )}`;

              const Wrapper = p.status === "Out of Stock" ? motion.div : motion.a;
              const wrapperProps =
                p.status === "Out of Stock"
                  ? {}
                  : {
                      href: whatsappLink,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    };

              return (
                <Wrapper
                  key={p.id}
                  {...wrapperProps}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative group rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900/60 to-black/80 shadow-xl hover:shadow-red-600/30 transition-all block"
                >
                  {/* SALE Badge */}
                  {p.sale && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-md animate-pulse">
                      SALE
                    </span>
                  )}

                  {/* Out of stock overlay */}
                  {p.status === "Out of Stock" && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center text-red-400 font-bold text-sm">
                      OUT OF STOCK
                    </div>
                  )}

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-medium line-clamp-2 group-hover:text-red-400 transition">
                      {p.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {p.oldPrice && (
                        <span className="text-gray-500 line-through text-xs">
                          {p.oldPrice}
                        </span>
                      )}
                      <span className="text-lg font-semibold text-red-400">
                        {p.price}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp hint */}
                  {p.status !== "Out of Stock" && (
                    <span className="absolute bottom-3 right-3 px-3 py-1 text-[10px] rounded-lg bg-green-600/80 text-white opacity-0 group-hover:opacity-100 transition">
                      Tap to order on WhatsApp
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-10">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    currentPage === i + 1
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
