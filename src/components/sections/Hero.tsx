import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-10 bg-black">
      <div className="container mx-auto px-24 md:px-26 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-white text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight">
            Your Tech Partner for{" "}
            <span className="text-accent">Smarter Growth</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <Button className="mt-4">Let's Talk</Button>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center bg-black/60">
          <div className="relative w-full max-w-md">
            <img
              src="/assets/images/ImageHero.png"
              alt="Tech Solutions Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
