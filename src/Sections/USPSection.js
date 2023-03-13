import { USPCard } from "../UI Components/USPCard";
import imageOne from "../Assets/imageOne.svg";
import imageTwo from "../Assets/imageTwo.svg";
import imageThree from "../Assets/imageThree.svg";

export const USPSection = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-48 min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-12 xl:gap-y-0 mb-12 xl:mb-0">
        <div className="border-2 shadow-lg rounded-2xl">
          <USPCard
            title="Compatible On All Platform"
            description="Our website is designed to work seamlessly on all platforms, including desktop, mobile and tablet. Whether you are using Windows, Mac, iOS or Android, you can access our website and enjoy a consistent user experience across all devices."
            image={imageOne}
          />
        </div>
        <div className="border-2 shadow-lg rounded-2xl">
          <USPCard
            title="Work Around Your Schedule"
            description="We understand that your time is valuable, which is why our platform is designed to work around your busy schedule. Whether you need to access our website early in the morning or late at night, we are always available and ready to assist you."
            image={imageTwo}
          />
        </div>
        <div className="border-2 shadow-lg rounded-2xl">
          <USPCard
            title="Controlled By Community"
            description="Our platform is decentralized, which means that it is not controlled by a single entity or organization. Instead, it is run and maintained by a community of users who are committed to ensuring its success."
            image={imageThree}
          />
        </div>
      </div>
    </div>
  );
};
