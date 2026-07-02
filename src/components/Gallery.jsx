function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg"
          >
            Image {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;