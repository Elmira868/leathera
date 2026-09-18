const TabTitle = ({ children }) => (
  <span
    className="
      inline-block
      bg-primary
      text-white
      font-bold
      text-sm sm:text-base
      py-1 sm:py-1.5
      px-3 sm:px-5
      whitespace-nowrap
      [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]
    "
  >
    {children}
  </span>
);

export default TabTitle;
