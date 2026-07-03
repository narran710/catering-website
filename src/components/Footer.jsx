import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Malligai Catering Services
            </h2>

            <p className="mt-5 leading-7">
              We deliver exceptional catering services for weddings,
              birthdays, corporate events, and celebrations with
              delicious food and professional hospitality.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-orange-500 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-orange-500 transition">
                  Testimonials
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500 transition">
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

            <div className="space-y-4">

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                +91 8608607404
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                catering@example.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                Coimbatore, Tamil Nadu
              </p>

            </div>

          </div>

          {/* Social Media */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-orange-500 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">

          © {new Date().getFullYear()} Malligai Catering Services. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;