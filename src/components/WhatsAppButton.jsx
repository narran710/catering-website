import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918608607404"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      hover:bg-green-600
      text-white
      p-4
      rounded-full
      shadow-xl
      transition
      duration-300
      hover:scale-110
      z-50
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;