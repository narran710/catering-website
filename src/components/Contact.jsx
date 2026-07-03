import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import { client } from "../sanity/client";
import { contactQuery, socialQuery } from "../sanity/queries";

function Contact() {
  const [contact, setContact] = useState(null);
  const [social, setSocial] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const contactData = await client.fetch(contactQuery);
        const socialData = await client.fetch(socialQuery);

        setContact(contactData);
        setSocial(socialData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!contact) {
    return (
      <section className="py-20 text-center">
        Loading Contact...
      </section>
    );
  }

  return (
    <FadeInSection>
      <section
        id="contact"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

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

            <div className="space-y-6">

              <div className="flex gap-4">
                <FaPhoneAlt className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">
                    {contact.businessHours}
                  </p>
                </div>
              </div>

              {social?.instagram && (
                <div className="flex gap-4">
                  <FaInstagram className="text-orange-600 text-xl mt-1" />
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    Instagram
                  </a>
                </div>
              )}

            </div>

            <div>

              <iframe
                src={contact.googleMapsUrl}
                title="Google Map"
                className="w-full h-[450px] rounded-xl shadow-lg"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default Contact;