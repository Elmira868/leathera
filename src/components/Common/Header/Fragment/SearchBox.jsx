import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const submitSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setMobileOpen(false);
  };

  return (
    <div className="relative px-5 py-4">
      {/* Desktop Search */}
      <form onSubmit={submitSearch} className="relative hidden lg:block">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
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
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 transition-colors hover:text-primary"
          aria-label="Search"
        >
          <IoMdSearch size={20} />
        </button>
      </form>

      {/* Mobile Search */}
      <div className="lg:hidden">
        {!mobileOpen && (
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-full p-2 text-gray-700 transition hover:bg-gray-100 hover:text-primary"
            aria-label="Open search"
          >
            <IoMdSearch size={24} />
          </button>
        )}

        {mobileOpen && (
          <form onSubmit={submitSearch} className="flex items-center gap-2">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products"
              aria-label="Search products"
              className="w-36 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition-colors focus:border-primary sm:w-52"
            />
            <button
              type="submit"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
              aria-label="Search"
            >
              <IoMdSearch size={20} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SearchBox;