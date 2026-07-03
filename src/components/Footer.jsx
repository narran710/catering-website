import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import { client } from "../sanity/client";
import { contactQuery, socialQuery } from "../sanity/queries";

function Footer() {
  const [contact, setContact] = useState(null);
  const [social, setSocial] = useState(null);

  useEffect(() => {
    async function fetchFooterData() {
      try {
        const contactData = await client.fetch(contactQuery);
        const socialData = await client.fetch(socialQuery);

        setContact(contactData);
        setSocial(socialData);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    }

    fetchFooterData();
  }, []);

  return (
    <FadeInSection>
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Business Info */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                {contact?.businessName || "Malligai Catering Services"}
              </h2>

              <p className="mt-5 leading-7">
                Premium catering services for weddings, birthdays,
                corporate events and every special celebration with
                exceptional hospitality and delicious food.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                <li><a href="#about" className="hover:text-orange-500">About</a></li>
                <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                <li><a href="#gallery" className="hover:text-orange-500">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
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
                  {contact?.phone}
                </p>

                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-500" />
                  {contact?.email}
                </p>

                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-500 mt-1" />
                  <span className="whitespace-pre-line">
                    {contact?.address}
                  </span>
                </p>

              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-5">
                Follow Us
              </h3>

              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:text-orange-500 transition"
                >
                  <FaInstagram className="text-2xl" />
                  Instagram
                </a>
              )}

              <p className="mt-6 text-sm leading-6">
                Follow us for our latest catering events, food specials,
                and customer stories.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
            © {new Date().getFullYear()}{" "}
            {contact?.businessName || "Malligai Catering Services"}.
            All Rights Reserved.
          </div>

        </div>
      </footer>
    </FadeInSection>
  );
}

export default Footer;