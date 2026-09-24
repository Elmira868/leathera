const CategoryToolbar = ({ sortBy, onSortChange }) => (
  <div className="mb-5 flex items-center justify-between gap-4">
    <p className="text-sm text-gray-500">Products from the Leathera collection</p>
    <select
      value={sortBy}
      onChange={(event) => onSortChange(event.target.value)}
      aria-label="Sort products"
      className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-primary"
    >
      <option value="featured">Sort: Featured</option>
      <option value="price-low">Price: Low to high</option>
      <option value="price-high">Price: High to low</option>
    </select>
  </div>
);

export default CategoryToolbar;
