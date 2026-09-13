import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="relative px-5 py-4">
      {/* Desktop Search */}
      <div className="hidden lg:block">
        <input
          type="text"
          placeholder="Search Products Here"
          className="
            w-full
            rounded-sm
            border border-gray-300
            px-3 py-2
            text-sm
            outline-none
            transition-colors
            focus:border-primary
            placeholder:text-sm
            placeholder:text-zinc-600
          "
        />

        <button
          type="button"
          className="absolute right-8 top-7"
          aria-label="Search"
        >
          <IoMdSearch size={20} />
        </button>
      </div>

      {/* Mobile Search */}
      <button
        type="button"
        className="
          flex
          items-center
          justify-center
          rounded-full
          p-2
          text-gray-700
          transition
          hover:bg-gray-100
          hover:text-primary
          lg:hidden
        "
        aria-label="Search"
      >
        <IoMdSearch size={24} />
      </button>
    </div>
  );
};

export default SearchBox;