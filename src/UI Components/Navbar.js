import { RxHamburgerMenu, RxLightningBolt } from "react-icons/rx";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export const Navbar = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div>
      {/*Responsive Navbar On All Devices: Desktop, Laptops, Tablets, Mobiles*/}
      <div className="font-[600] border-2 border-t-0 border-l-0 border-r-0 border-b-slate-600 shadow-2xl w-full flex justify-between px-4 py-2">
        <div className="flex gap-x-2">
          <RxLightningBolt className="mt-1" />
          <h1 className="leading-relaxed">Zapp Payments</h1>
        </div>
        <div className="space-x-4 hidden md:block">
          <a>What is Zapp Payments?</a>
          <a>Features & Services</a>
          <a>Request Access</a>
        </div>
        <div className="md:hidden p-1">
          <RxHamburgerMenu
            onClick={() => {
              setDropDownOpen(!dropDownOpen);
            }}
          />
        </div>
      </div>
      {/*Drop Down Menu*/}
      <div
        className={
          dropDownOpen
            ? "border-2 border-t-0 border-l-0 border-r-0 border-b-slate-600 px-4 py-2"
            : "hidden"
        }
      >
        <div className="text-sm flex flex-col gap-y-1">
          <div className="flex justify-between">
            <a>About Us</a>
            <div className="flex space-x-2">
              <a>My Account</a> <FaUserAlt className="mt-0.5" />
            </div>
          </div>
          <a>Features</a>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
};
