
import Button from "../../../components/Common/Button";

const NewCustomer = () => {
  return (
    <div className="flex h-fit w-full flex-col border border-gray-300 p-5 sm:p-6 lg:p-8">
      <h2 className="mb-2 font-roboto-Medium text-base text-gray-800 sm:text-lg">
        New Customer
      </h2>

      <h4 className="mb-2 text-sm font-medium text-gray-400 sm:text-base">
        Register Account
      </h4>

      <p className="mb-5 w-full text-sm leading-6 font-roboto-Light text-gray-400 sm:text-base">
        By creating an account you will be able to shop faster, be up to
        date on an order&apos;s status, and keep track of the orders you
        have previously made.
      </p>

      <div className="mt-auto">
        <Button>Continue</Button>
      </div>
    </div>
  );
};

export default NewCustomer;

