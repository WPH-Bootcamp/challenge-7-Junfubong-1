import { processSteps } from "../../data/process";

const OurProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Judul & Subjudul */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Alur Proses */}
        <div className="relative">
          {/* Garis Penghubung Vertikal */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-900 transform md:translate-x-[-50%]"></div>

          {/* Daftar Langkah */}
          <div className="space-y-12">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  step.id % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Nomor Langkah */}
                <div className="bg-orange-400 z-10 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-accent/20">
                  {step.id}
                </div>

                {/* Konten Langkah */}
                <div className="w-full md:w-[calc(50%-2rem)] bg-gray-950 border border-gray-900 rounded-lg p-5 hover:border-accent/30 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
