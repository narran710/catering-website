function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gray-300 h-64"></div>

      <div className="p-5">
        <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>

        <div className="h-4 bg-gray-300 rounded mb-2"></div>

        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;