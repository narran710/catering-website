function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p>
          📞 +91 98765 43210
        </p>

        <p>
          📧 catering@example.com
        </p>

        <p>
          📍 Chennai, Tamil Nadu
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            WhatsApp
          </button>

          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;