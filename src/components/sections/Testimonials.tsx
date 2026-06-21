import { useState } from "react";
import { testimonialsData } from "../../data/testimonials";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-accent" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Judul & Subjudul */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Grid Kartu Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-gray-950 border rounded-xl p-6 transition-all duration-300 ${
                index === activeIndex
                  ? "border-accent/40 shadow-lg shadow-accent/10 scale-[1.02]"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Tanda Kutip */}
              <div className="absolute -top-3 left-6 text-4xl text-accent/30 bg-orange-400">"</div>

              {/* Bintang */}
              <StarRating rating={testimonial.rating} />

              {/* Isi Testimoni */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Info Penulis */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indikator Navigasi */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-accent w-6" : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Lihat testimoni ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
