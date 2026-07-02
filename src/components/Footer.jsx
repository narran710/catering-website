function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold">
          Catering Website
        </h3>

        <p className="mt-3 text-gray-400">
          Delicious food. Exceptional service.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Catering Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;