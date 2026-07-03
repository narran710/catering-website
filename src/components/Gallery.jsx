import { FaCamera } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const galleryItems = [
  {
    title: "Wedding Catering",
    description: "Elegant buffet setup for wedding celebrations.",
  },
  {
    title: "Birthday Celebration",
    description: "Delicious food and desserts for birthday parties.",
  },
  {
    title: "Corporate Event",
    description: "Professional catering for meetings and conferences.",
  },
  {
    title: "Outdoor Catering",
    description: "Fresh food served at outdoor events and functions.",
  },
  {
    title: "Live Food Counter",
    description: "Freshly prepared dishes served live for guests.",
  },
  {
    title: "Dessert Station",
    description: "A delightful variety of sweets and desserts.",
  },
];

function Gallery() {
  return (
    <FadeInSection>
      <section
        id="gallery"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Our Catering Events
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              Explore some of our catering arrangements for weddings,
              birthday celebrations, corporate events, and family
              gatherings.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item) => (

              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="h-64 bg-gray-200 flex flex-col items-center justify-center group-hover:scale-105 transition duration-300">

                  <FaCamera className="text-5xl text-gray-400 mb-4" />

                  <p className="text-gray-500 font-medium">
                    Image Placeholder
                  </p>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default Gallery;