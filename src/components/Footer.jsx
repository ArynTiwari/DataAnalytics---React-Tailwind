import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATA.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi
          neque vitae, explicabo fugiat quisquam!
        </p>
        <div className="flex  md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Insights</li>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>

          <li className="py-2 text-sm">Pricing</li>
          <li className="py-2 text-sm">Doccuments</li>
          <li className="py-2 text-sm">Guides</li>
          <li className="py-2 text-sm">Help</li>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Blogs</li>
          <li className="py-2 text-sm">Jobs</li>
          <li className="py-2 text-sm">Legal</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
