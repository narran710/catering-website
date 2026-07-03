import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";

function Footer() {
  return (
    <FadeInSection>
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Company */}

            <div>
              <h2 className="text-3xl font-bold text-white">
                Malligai Catering Services
              </h2>

              <p className="mt-5 leading-7">
                We provide premium catering services for weddings,
                engagements, birthday celebrations, corporate events,
                and all special occasions with delicious food,
                elegant presentation, and exceptional hospitality.
              </p>
            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#home"
                    className="hover:text-orange-500 transition"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="hover:text-orange-500 transition"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="hover:text-orange-500 transition"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#gallery"
                    className="hover:text-orange-500 transition"
                  >
                    Gallery
                  </a>
                </li>

                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-orange-500 transition"
                  >
                    Testimonials
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-orange-500 transition"
                  >
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Contact
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-orange-500" />

                  <a
                    href="tel:+918608607404"
                    className="hover:text-orange-500 transition"
                  >
                    +91 86086 07404
                  </a>

                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-500" />

                  <a
                    href="mailto:malligaicaters@gmail.com"
                    className="hover:text-orange-500 transition"
                  >
                    malligaicaters@gmail.com
                  </a>

                </div>

                <div className="flex items-start gap-3">

                  <FaMapMarkerAlt className="text-orange-500 mt-1" />

                  <span>
                    110 Irugur Rd
                    <br />
                    Annai Indira Nagar
                    <br />
                    Tamil Nadu
                  </span>

                </div>

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-5">
                Follow Us
              </h3>

              <a
                href="https://www.instagram.com/malligai_catering_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-xl" />
              </a>

              <p className="mt-6 text-sm leading-7">
                Follow us on Instagram to explore our latest catering
                events, delicious food, decorations, and memorable
                celebrations.
              </p>

            </div>

          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">

            © {new Date().getFullYear()} Malligai Catering Services.
            All Rights Reserved.

          </div>

        </div>
      </footer>
    </FadeInSection>
  );
}

export default Footer;