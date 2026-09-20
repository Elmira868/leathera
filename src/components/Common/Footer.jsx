
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";

import Button from "./Button";

const Footer = () => {
  return (
    <footer
      className="
        mt-8
        w-full
        overflow-hidden
        bg-[url('/assets/static/footer-bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Contact Information */}
      <div
        className="
          flex
          min-h-70
          flex-col
          divide-y
          divide-gray-300
          sm:min-h-80
          md:min-h-90
          md:flex-row
          md:divide-x
          md:divide-y-0
        "
      >
        {/* Location */}
        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-3
            px-6
            py-6
            text-center
            md:py-8
          "
        >
          <MdLocationPin className="shrink-0 text-2xl text-white" />

          <div>
            <h3 className="text-sm font-medium text-white sm:text-base">
              Leather Shop - Demo Store
            </h3>

            <h4 className="mt-1 text-xs text-gray-700 sm:text-sm">
              United States
            </h4>
          </div>
        </div>

        {/* Phone */}
        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-3
            px-6
            py-6
            text-center
            md:py-8
          "
        >
          <FaPhone className="shrink-0 text-lg text-white" />

          <h3 className="text-sm font-medium text-white sm:text-base">
            000-000-0000
          </h3>
        </div>

        {/* Email */}
        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-3
            px-6
            py-6
            text-center
            md:py-8
          "
        >
          <SlEnvolope className="shrink-0 text-lg text-white" />

          <h3 className="break-all text-sm font-medium text-white sm:text-base">
            sales@example.com
          </h3>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-5
          border-t
          border-gray-300
          px-6
          py-8
          sm:gap-6
          md:flex-row
        "
      >
        {/* Newsletter Title */}
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-white
            sm:text-base
          "
        >
          <SlEnvolope className="shrink-0 text-lg" />

          <span>Newsletter</span>
        </div>

        {/* Newsletter Form */}
        <form
          className="
            flex
            w-full
            max-w-md
            flex-col
            gap-2
            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              min-w-0
              flex-1
              rounded
              border
              border-gray-300
              bg-white
              px-4
              py-2
              text-sm
              text-gray-800
              outline-none
              placeholder:text-gray-400
              focus:border-primary
            "
          />

          <Button>Subscribe</Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

