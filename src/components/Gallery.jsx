import { useEffect, useState } from "react";
import FadeInSection from "./FadeInSection";
import { client } from "../sanity/client";
import { urlFor } from "../sanity/image";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(`*[_type=="gallery"] | order(_createdAt desc)`);

        console.log(data);

        setGallery(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  return (
    <FadeInSection>
      <section id="gallery" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Our Catering Events
            </h2>
          </div>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={urlFor(item.image).width(600).url()}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
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