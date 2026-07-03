import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { client } from "../sanity/client";
import { contactQuery, socialQuery } from "../sanity/queries";

function Contact() {
  const [contact, setContact] = useState(null);
  const [social, setSocial] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchContact() {
      try {
        const contactData = await client.fetch(contactQuery);
        const socialData = await client.fetch(socialQuery);

        setContact(contactData);
        setSocial(socialData);
      } catch (err) {
        console.error(err);
        setError("Unable to load contact information.");
      } finally {
        setLoading(false);
      }
    }

    fetchContact();
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
        id="contact"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-14">

            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Get In Touch
            </h2>

            <p className="text-gray-600 mt-5">
              We'd love to cater your next event.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}

            <div className="space-y-8">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-orange-600 text-xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-600 hover:text-orange-600 transition"
                  >
                    {contact.phone}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-orange-600 text-xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 hover:text-orange-600 transition"
                  >
                    {contact.email}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-600 whitespace-pre-line">
                    {contact.address}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaClock className="text-orange-600 text-xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Business Hours
                  </h3>

                  <p className="text-gray-600">
                    {contact.businessHours}
                  </p>

                </div>

              </div>

              {social?.instagram && (

                <div className="flex gap-4">

                  <FaInstagram className="text-orange-600 text-xl mt-1" />

                  <div>

                    <h3 className="font-semibold text-lg">
                      Instagram
                    </h3>

                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 hover:text-orange-600 transition"
                    >
                      Follow Us
                    </a>

                  </div>

                </div>

              )}

            </div>

            {/* Right Side */}

            <div>

              {contact.googleMapsUrl ? (

                <iframe
                  src={contact.googleMapsUrl}
                  title="Google Map"
                  className="w-full h-[450px] rounded-2xl shadow-lg"
                  loading="lazy"
                  allowFullScreen
                />

              ) : (

                <div className="w-full h-[450px] rounded-2xl bg-gray-200 flex items-center justify-center">
                  Google Map Not Available
                </div>

              )}

            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default Contact;