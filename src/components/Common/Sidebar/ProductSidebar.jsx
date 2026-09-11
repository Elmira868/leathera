
import { Link } from "react-router";
import { filters, categories } from "../../../lib/constants";

const ProductSidebar = () => {
 return (
    <aside className="mt-10 ml-10 w-full max-w-xs">

      {/* Categories */}
    
<div className="flex flex-col items-start gap-3 border-b border-gray-300 py-6">
  <h3 className="mb-2 text-lg text-primary">Categories</h3>
  {categories.map((category) => (
    <Link
      key={category.path}
      to={category.path}
      className="w-fit text-sm font-roboto-Light transition hover:text-primary"
    >
      {category.name}
    </Link>
  ))}
</div>



      {/* Filters */}
      {filters.map((filter) => (
        <div
          key={filter.key}
          className="border-b border-gray-300 py-6"
        >
          <h3 className="mb-4 text-lg text-primary">
            {filter.title}
          </h3>

          <div className="space-y-3">
            {filter.items.map((item) => (
              <label
                key={item.value}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  name={filter.key}
                  value={item.value}
                  className="h-4 w-4 accent-primary"
                />

                {filter.key === "color" && (
                  <span
                    className="h-5 w-5 rounded-full border border-gray-300"
                    style={{
                      backgroundColor: item.value,
                    }}
                  />
                )}

                <span className="text-sm font-roboto-Light">
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default ProductSidebar