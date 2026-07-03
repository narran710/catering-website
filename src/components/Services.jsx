import {
  FaGlassCheers,
  FaBirthdayCake,
  FaBuilding,
  FaTree,
  FaUtensils,
  FaFire,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: <FaGlassCheers className="text-5xl text-orange-600" />,
    title: "Wedding Catering",
    description:
      "Elegant catering services with customized menus for unforgettable wedding celebrations.",
  },
  {
    icon: <FaBirthdayCake className="text-5xl text-orange-600" />,
    title: "Birthday Parties",
    description:
      "Delicious food and desserts designed to make every birthday celebration special.",
  },
  {
    icon: <FaBuilding className="text-5xl text-orange-600" />,
    title: "Corporate Events",
    description:
      "Professional catering solutions for meetings, conferences, office gatherings, and business events.",
  },
  {
    icon: <FaTree className="text-5xl text-orange-600" />,
    title: "Outdoor Catering",
    description:
      "Complete outdoor catering services for family functions, festivals, and open-air celebrations.",
  },
  {
    icon: <FaUtensils className="text-5xl text-orange-600" />,
    title: "Buffet Service",
    description:
      "Beautifully arranged buffet counters offering a wide variety of delicious dishes.",
  },
  {
    icon: <FaFire className="text-5xl text-orange-600" />,
    title: "Live Food Counters",
    description:
      "Freshly prepared dishes served live to delight your guests with an interactive dining experience.",
  },
];

function Services() {
  return (
    <FadeInSection>
      <section
        id="services"
        className="bg-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Catering For Every Occasion
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              We provide premium catering services for weddings,
              birthdays, corporate events, family gatherings,
              and every special occasion with exceptional quality.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default Services;