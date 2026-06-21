import { statsData } from "../../data/statistics";

const EndToEndSolutions = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-26 text-center">
        {/* Judul & Deskripsi */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          From strategy to execution, we deliver solutions that grow your business.
        </p>

        {/* Statistik Lingkaran */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gray-950 border border-gray-900 flex flex-col items-center justify-center hover:border-accent/40 transition-colors duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-accent mb-2 text-orange-500">
                {stat.value}
              </span>
              <span className="text-sm text-gray-300 max-w-20 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndSolutions;
