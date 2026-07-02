const services = [
  "Wedding Catering",
  "Birthday Parties",
  "Corporate Events",
  "Outdoor Catering",
  "Buffet Service",
  "Live Food Counters",
];

function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-orange-50"
    >
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {service}
            </h3>

            <p className="mt-3 text-gray-600">
              Professional catering service tailored for your special event.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;