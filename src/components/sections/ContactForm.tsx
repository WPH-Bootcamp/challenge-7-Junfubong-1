import React, { useState, type FormEvent } from "react";
import Button from "../ui/Button";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: ["Web Development"], // Default terpilih
  });

  const serviceOptions = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile App Development" },
    { id: "uiux", label: "UI/UX Design" },
    { id: "cloud", label: "Cloud Solutions" },
    { id: "software", label: "Software Development" },
    { id: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Di sini nanti bisa ditambahkan logika pengiriman data
    console.log("Form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    // Reset formulir
    setFormData({
      name: "",
      email: "",
      message: "",
      services: ["Web Development"],
    });
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        {/* Judul & Subjudul */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-gray-400">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        {/* Formulir Kontak */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2.5 bg-gray-950 border border-gray-900 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2.5 bg-gray-950 border border-gray-950 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Input Pesan */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your message"
              required
              className="w-full px-4 py-2.5 bg-gray-950 border border-gray-950 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          {/* Pilihan Layanan */}
          <div>
            <p className="block text-sm text-gray-300 mb-3">Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceOptions.map((service) => (
                <label
                  key={service.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service.label)}
                    onChange={() => handleServiceToggle(service.label)}
                    className="w-4 h-4 rounded border-gray-950 bg-gray-950 text-accent focus:ring-accent/30"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    {service.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Tombol Kirim */}
          <Button
            type="submit"
            className="w-full mt-4 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 rounded-md transition-all duration-300"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
