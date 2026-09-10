import { FaRegUser } from "react-icons/fa6";

const UserAccount = () => {
  return (
    <div className="flex min-w-0 cursor-pointer items-center gap-x-2 py-3 sm:gap-x-3 sm:py-4">
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
  );
};

export default UserAccount;
