import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function ImageModal({ image, title, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-500 transition"
        >
          <FaTimes />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-fadeIn"
        />

        <h3 className="text-white text-center mt-5 text-xl font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default ImageModal;