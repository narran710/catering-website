import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";

function Contact({ contact, social }) {
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

            {/* Contact Card */}

            <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200 rounded-3xl shadow-xl p-8 md:p-10 space-y-8 border border-orange-200">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-orange-700 text-2xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <a
                    href={`tel:${contact?.phone}`}
                    className="text-gray-700 hover:text-orange-600 transition"
                  >
                    {contact?.phone}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-orange-700 text-2xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <a
                    href={`mailto:${contact?.email}`}
                    className="text-gray-700 hover:text-orange-600 transition"
                  >
                    {contact?.email}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-orange-700 text-2xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-700 whitespace-pre-line">
                    {contact?.address}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaClock className="text-orange-700 text-2xl mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Business Hours
                  </h3>

                  <p className="text-gray-700">
                    {contact?.businessHours}
                  </p>

                </div>

              </div>

              {social?.instagram && (

                <div className="flex gap-4">

                  <FaInstagram className="text-orange-700 text-2xl mt-1" />

                  <div>

                    <h3 className="font-semibold text-lg">
                      Instagram
                    </h3>

                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-orange-600 transition"
                    >
                      Follow Us
                    </a>

                  </div>

                </div>

              )}

            </div>

            {/* Google Map */}

            <div>

              {contact?.googleMapsUrl ? (

                <iframe
                  src={contact.googleMapsUrl}
                  title="Google Map"
                  className="w-full h-[450px] rounded-2xl shadow-lg"
                  loading="lazy"
                  allowFullScreen
                />

              ) : (

                <div className="w-full h-[450px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-600">
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