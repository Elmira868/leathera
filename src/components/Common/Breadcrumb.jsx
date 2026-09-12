
import { Link } from "react-router";

const Breadcrumb = ({ currentPage }) => {
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
        <Link to="/" className="transition-colors hover:text-primary">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-gray-800">{currentPage}</span>
      </div>
    </nav>
  )
}

export default Breadcrumb