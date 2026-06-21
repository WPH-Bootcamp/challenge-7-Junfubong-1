import { useState } from "react";
import { industriesData } from "../../data/industries";

const BuiltForIndustry = () => {
  const [activeIndustry, setActiveIndustry] = useState(industriesData[0]);

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Judul & Subjudul */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Built for Your Industry
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>
        </div>

        {/* Konten Utama */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Daftar Industri */}
          <div className="w-full lg:w-1/3 space-y-2">
            {industriesData.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`w-full text-left p-3 border-l-2 transition-all duration-300 ${
                  activeIndustry.id === industry.id
                    ? "border-orange-400 text-white bg-white-900/50"
                    : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
                }`}
              >
                <span className="text-lg font-medium">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Deskripsi & Gambar */}
          <div className="w-full lg:w-2/3">
            <p className="text-gray-300 mb-6 leading-relaxed">
              {activeIndustry.description}
            </p>
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-gray-800">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForIndustry;
