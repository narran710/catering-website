import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    event: "Wedding Reception",
    review:
      "The food was delicious and beautifully presented. Our guests loved every dish, and the service was exceptional.",
  },
  {
    name: "Priya Nair",
    event: "Birthday Celebration",
    review:
      "Everything was organized perfectly. The staff was friendly, punctual, and the menu exceeded our expectations.",
  },
  {
    name: "Arjun Kumar",
    event: "Corporate Event",
    review:
      "Professional service with excellent food quality. We received many compliments from our employees and clients.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-orange-600 uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Customer satisfaction is our highest priority. Here's what our clients
            have to say about their catering experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >

              <FaQuoteLeft className="text-3xl text-orange-600 mb-5" />

              <p className="text-gray-600 leading-7 italic">
                "{item.review}"
              </p>

              <div className="flex mt-6 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex items-center mt-8">

                <FaUserCircle className="text-5xl text-gray-400 mr-4" />

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.event}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;