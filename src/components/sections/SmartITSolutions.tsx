/* import React from "react"; */
import { servicesData } from "../../data/services";

const SmartITSolutions = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Judul & Subjudul */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service,idx) => (
            <div
              key={idx}
              className="bg-gray-950 border border-gray-900 rounded-lg p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
            >
              {/* Ikon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              {/* Judul */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              {/* Deskripsi */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartITSolutions;
