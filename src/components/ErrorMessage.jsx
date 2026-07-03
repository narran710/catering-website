function ErrorMessage({ message }) {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="text-gray-600 mt-4">
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;