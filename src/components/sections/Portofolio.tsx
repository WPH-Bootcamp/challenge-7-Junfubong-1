/* import React from "react"; */
import { portfolioData } from "../../data/portofolio";

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Judul & Subjudul */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        {/* Grid Kartu Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Gambar Proyek */}
              <div className="w-full rounded-lg overflow-hidden border border-gray-800 shadow-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Teks Keterangan */}
              <h3 className="text-orange-500 font-medium text-base">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;