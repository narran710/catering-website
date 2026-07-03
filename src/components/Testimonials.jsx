import { useEffect, useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import { client } from "../sanity/client";
import { testimonialsQuery } from "../sanity/queries";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await client.fetch(testimonialsQuery);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <FadeInSection>
      <section
        id="testimonials"
        className="bg-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-14">

            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              What Our Customers Say
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              Customer satisfaction is our greatest achievement.
              Here's what our customers say about Malligai Catering Services.
            </p>

          </div>

          {loading ? (
            <div className="text-center text-gray-500">
              Loading testimonials...
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {testimonials.map((item) => (

                <div
                  key={item._id}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >

                  <FaQuoteLeft className="text-3xl text-orange-600 mb-5" />

                  <p className="text-gray-600 italic leading-7">
                    "{item.review}"
                  </p>

                  <div className="flex mt-6 text-yellow-400">
                    {Array.from({ length: item.rating || 5 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <div className="flex items-center mt-8">

                    <FaUserCircle className="text-5xl text-gray-400 mr-4" />

                    <div>

                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.customerName}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.event}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>
      </section>
    </FadeInSection>
  );
}

export default Testimonials;