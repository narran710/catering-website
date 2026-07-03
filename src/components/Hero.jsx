function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[4px] font-semibold text-orange-100">
            Welcome to Malligai Catering Services
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
            Delicious Catering
            <br />
            For Every Occasion
          </h1>

          <p className="mt-8 text-lg md:text-xl text-orange-100 leading-8">
            From weddings and birthdays to corporate events and family
            celebrations, we provide exceptional catering services with
            delicious food, elegant presentation, and professional hospitality.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#gallery"
              className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
            >
              View Gallery
            </a>

            <a
              href="#contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition"
            >
              Contact Us
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;