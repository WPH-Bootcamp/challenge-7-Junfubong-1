import { useState } from "react";
import { faqData } from "../../data/faq";
import Button from "../ui/Button";

const FAQ = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (id: number) => {
    setFaqs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Kolom Kiri: Daftar FAQ */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Need Help? Start Here.
            </h2>
            <p className="text-gray-400 mb-10">
              Everything you need to know — all in one place.
            </p>

            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-800 pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-white font-medium text-lg group-hover:text-accent transition-colors">
                      {item.question}
                    </span>
                    <span className="text-accent text-xl font-light">
                      {item.isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {item.isOpen && (
                    <div className="mt-3 text-gray-400 text-sm leading-relaxed pr-8">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Kartu Konsultasi */}
          <div className="w-full lg:w-1/3">
            <div className="bg-orange-500 rounded-xl overflow-hidden shadow-lg sticky top-24">
              <div className="p-6 text-white">
                
                <h3 className="text-2xl font-bold mb-4">
                  Let's talk it through
                </h3>
                <p className="text-white/90 mb-5">
                  book a free consultation with our team.
                </p>
              </div>
              <div className="h-48 bg-gray-200">
                <img
                  src="/assets/images/meeting.png"
                  alt="Consultation meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Button className="w-full text-black  hover:bg-gray-100 shadow-none rounded-2xl">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
