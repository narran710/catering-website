import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";

function Contact() {
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
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Let's Make Your Event Special
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              Whether you're planning a wedding, engagement, birthday,
              corporate event, or family gathering, Malligai Catering
              Services is here to serve delicious food with exceptional
              hospitality.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Card */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-7">

                {/* Phone */}

                <div className="flex items-start gap-4">

                  <FaPhoneAlt className="text-orange-600 text-xl mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Phone
                    </h4>

                    <a
                      href="tel:+918608607404"
                      className="text-gray-600 hover:text-orange-600 transition"
                    >
                      +91 86086 07404
                    </a>

                  </div>

                </div>

                {/* Email */}

                <div className="flex items-start gap-4">

                  <FaEnvelope className="text-orange-600 text-xl mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Email
                    </h4>

                    <a
                      href="mailto:malligaicaters@gmail.com"
                      className="text-gray-600 hover:text-orange-600 transition"
                    >
                      malligaicaters@gmail.com
                    </a>

                  </div>

                </div>

                {/* Address */}

                <div className="flex items-start gap-4">

                  <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Address
                    </h4>

                    <p className="text-gray-600">
                      110 Irugur Rd
                      <br />
                      Annai Indira Nagar
                      <br />
                      Tamil Nadu
                    </p>

                  </div>

                </div>

                {/* Business Hours */}

                <div className="flex items-start gap-4">

                  <FaClock className="text-orange-600 text-xl mt-1" />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Business Hours
                    </h4>

                    <p className="text-gray-600">
                      Monday – Sunday
                    </p>

                    <p className="text-gray-600">
                      9:00 AM – 9:00 PM
                    </p>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="https://wa.me/918608607404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href="tel:+918608607404"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition"
                >
                  Call Now
                </a>

                <a
                  href="https://www.instagram.com/malligai_catering_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <FaInstagram />
                  Instagram
                </a>

              </div>

            </div>

            {/* Google Map */}

            <div className="overflow-hidden rounded-2xl shadow-lg">

              <iframe
                title="Malligai Catering Services Location"
                src="https://www.google.com/maps?q=110+Irugur+Rd+Annai+Indira+Nagar+Tamil+Nadu&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="min-h-[450px] w-full border-0"
              />

            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default Contact;