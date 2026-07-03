import { useEffect, useState } from "react";
import FadeInSection from "./FadeInSection";
import Loader from "./Loader";
import SkeletonCard from "./SkeletonCard";
import ErrorMessage from "./ErrorMessage";
import { client } from "../sanity/client";
import { galleryQuery } from "../sanity/queries";
import { urlFor } from "../sanity/image";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(galleryQuery);
        setGallery(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load gallery.");
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

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
              Explore our recent catering events and delicious food
              arrangements for weddings, birthdays, corporate events,
              and family celebrations.
            </p>

          </div>

          {loading ? (

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SkeletonCard key={item} />
              ))}
            </div>

          ) : gallery.length === 0 ? (

            <div className="text-center text-gray-500 text-lg">
              No gallery images available.
            </div>

          ) : (

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {gallery.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >

                  <img
                    src={urlFor(item.image).width(700).height(500).url()}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                      {item.caption || "Malligai Catering Services"}
                    </p>

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

export default Gallery;