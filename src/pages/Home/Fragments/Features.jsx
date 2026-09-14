
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";

const features = [
  {
    icon: FaRegUserCircle,
    text: "24x7 Free Support",
  },
  {
    icon: AiOutlineDollar,
    text: "Money Back Guarantee",
  },
  {
    icon: GrDeliver,
    text: "Free Worldwide Shipping",
  },
];

const Features = () => {
  return (
    <div className=" md:grid hidden grid-cols-1 gap-6 bg-gray-100 sm:grid-cols-3">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.text}
            className="flex items-center gap-4 border-b border-gray-400/40 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <Icon className="text-3xl" />

            <h2 className="text-sm font-roboto-Medium text-gray-900">
              {item.text}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Features;

