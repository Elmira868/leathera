import { Link } from "react-router";
import { sidebarSections } from "../../../lib/constants";

const AuthSidebar = () => {
  return (
    <aside className="mt-10 ml-10 w-full max-w-xs">
      {sidebarSections.map((section) => (
        <div
          key={section.title}
          className="border-b border-gray-300 py-6 first:pt-0"
        >
          <h3 className="mb-4 text-lg text-primary">{section.title}</h3>

          <nav className="flex flex-col items-start gap-3">
            {section.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="w-fit text-sm font-roboto-Light transition hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default AuthSidebar;
