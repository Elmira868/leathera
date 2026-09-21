const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-10 w-10 border-4",
};

const Loading = ({ label = "Loading...", size = "md", className = "" }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center gap-3 text-sm text-gray-500 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`animate-spin rounded-full border-current border-t-transparent ${sizeClasses[size] || sizeClasses.md}`}
      />
      <span>{label}</span>
    </div>
  );
};

export default Loading;