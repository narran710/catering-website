const testimonials = [
  {
    name: "Rahul",
    review: "Excellent food and outstanding service!",
  },
  {
    name: "Priya",
    review: "Highly recommended for weddings and family functions.",
  },
  {
    name: "Arjun",
    review: "Professional staff with delicious food.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-orange-50"
    >
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
        Customer Testimonials
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <p className="text-yellow-500 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </p>

            <p className="text-gray-600 italic">
              "{item.review}"
            </p>

            <h4 className="mt-5 font-semibold text-orange-600">
              - {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;