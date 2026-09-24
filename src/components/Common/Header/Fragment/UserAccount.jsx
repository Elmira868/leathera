import { useState, useRef, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";

const UserAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${isOpen ? "z-110" : "z-auto"}`}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex min-w-0 cursor-pointer items-center gap-x-2 py-3 sm:gap-x-3 sm:py-4"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-700 transition-colors duration-200 hover:border-primary hover:text-primary sm:size-10 sm:text-xl">
          <FaRegUser aria-hidden="true" />
        </span>
        <div className="hidden min-w-0 sm:block">
          <h1 className="truncate font-roboto-Medium text-sm hover:text-primary sm:text-base">
            My Account
          </h1>
          <span className="mt-0.5 block truncate font-roboto-Light text-xs text-gray-400 sm:mt-1 sm:text-sm">
            Get Option Here
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg sm:w-48">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block w-full px-4 py-2.5 text-start font-roboto-Medium text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary sm:py-3 sm:text-base"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block w-full border-t border-gray-100 px-4 py-2.5 text-start font-roboto-Medium text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary sm:py-3 sm:text-base"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
