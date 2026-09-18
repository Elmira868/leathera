
const RatingStars = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="mt-2 flex items-center justify-center gap-0.5">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-400">
          ★
        </span>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <span
          className="bg-linear-to-r from-yellow-400 from-50% to-gray-300 to-50% bg-clip-text text-transparent"
        >
          ★
        </span>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">
          ★
        </span>
      ))}

         </div>
  );
};

export default RatingStars;