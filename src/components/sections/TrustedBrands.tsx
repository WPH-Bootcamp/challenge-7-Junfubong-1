

// Daftar logo mitra
const partnerLogos = [
  { name: 'Upwork', src: '/assets/icons/upwork.png' },
  { name: 'Zoom', src: '/assets/icons/zoom.png' },
  { name: 'Postman', src: '/assets/icons/postman.png' },
  { name: 'Databricks', src: '/assets/icons/databricks.png' },
  { name: 'Airbnb', src: '/assets/icons/airbnb.png' },
  { name: 'Dropbox', src: 'assets/icons/dropbox.png' },
  { name: 'PayPal', src: '/assets/icons/paypal.png' },
];

const TrustedBrands = () => {
  return (
    <section
      className="w-full py-10 px-4 md:px-8 lg:px-16 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul */}
        <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-200 tracking-wide mb-8">
          Trusted by Global Innovators & Leading Brands
        </h3>

        {/* Baris Logo */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-10 lg:gap-x-12 opacity-70 hover:opacity-90 transition-opacity duration-300
           bg-linear-to-r from-black via-gray-900 to-black">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="relative h-6 md:h-7 lg:h-8 w-auto">
              <img
                src={logo.src}
                alt={logo.name}
                width={90}
                height={32}
                className="object-contain brightness-200 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;