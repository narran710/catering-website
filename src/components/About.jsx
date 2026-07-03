import { useEffect, useState } from "react";
import {
  FaUtensils,
  FaUserTie,
  FaClock,
  FaLeaf,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { client } from "../sanity/client";
import { aboutQuery } from "../sanity/queries";

const features = [
  {
    icon: <FaUtensils size={28} className="text-orange-600" />,
    title: "Fresh Ingredients",
    description:
      "We use only fresh, high-quality ingredients to prepare every meal.",
  },
  {
    icon: <FaUserTie size={28} className="text-orange-600" />,
    title: "Experienced Chefs",
    description:
      "Our skilled chefs create delicious dishes for every occasion.",
  },
  {
    icon: <FaClock size={28} className="text-orange-600" />,
    title: "On-Time Service",
    description:
      "We ensure timely preparation and delivery for every event.",
  },
  {
    icon: <FaLeaf size={28} className="text-orange-600" />,
    title: "Hygienic Preparation",
    description:
      "Food is prepared following strict hygiene and safety standards.",
  },
];

function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await client.fetch(aboutQuery);
        setAbout(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load About section.");
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <FadeInSection>
      <section
        id="about"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Side */}

            <div>

              <p className="text-orange-600 font-semibold uppercase tracking-wider">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
                {about?.heading}
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
                {about?.description}
              </p>

              <button className="mt-8 bg-orange-600 hover:bg-orange-700 transition duration-300 text-white px-7 py-3 rounded-lg font-semibold">
                {about?.buttonText}
              </button>

            </div>

            {/* Right Side */}

            <div className="grid sm:grid-cols-2 gap-6">

              {features.map((item) => (

                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                >

                  <div className="mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default About;