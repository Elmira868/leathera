import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        backgroundImage: "url('/assets/static/Breadcrumb-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="border-b border-gray-100 px-4 py-3 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 text-sm text-gray-500">
        <Link
          to="/"
          className="transition-colors hover:text-primary"
        >
          Home
        </Link>

        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <div key={path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>

              <Link
                to={path}
                className="capitalize transition-colors hover:text-primary"
              >
                {segment.replaceAll("-", " ")}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;