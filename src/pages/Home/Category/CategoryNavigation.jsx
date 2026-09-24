import { Link } from "react-router";

const CategoryNavigation = ({ items, activePath }) => (
  <aside className="h-fit rounded-lg border border-gray-200 p-5">
    <h2 className="text-sm font-roboto-Medium uppercase tracking-wider text-gray-900">
      Related categories
    </h2>
    <ul className="mt-4 space-y-3">
      {items.slice(0, 8).map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`text-sm capitalize transition-colors hover:text-primary ${
              item.path === activePath
                ? "font-roboto-Medium text-primary"
                : "text-gray-500"
            }`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default CategoryNavigation;
