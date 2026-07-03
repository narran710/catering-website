import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-orange-600 uppercase tracking-widest font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Let's Plan Your Next Event
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We'd love to make your special occasion memorable. Reach out to us
            for bookings and inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a
                    href="tel:+918608607404"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    +91 8608607404
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:catering@example.com"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    catering@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">
                    123 Main Street, Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-orange-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sun : 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-4 mt-10">

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

            </div>

          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=coimbatore&output=embed"
              width="100%"
              height="100%"
              className="min-h-[450px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;