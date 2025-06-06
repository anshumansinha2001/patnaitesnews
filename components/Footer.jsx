import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegUserCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around gap-4 sm:gap-0  bg-black text-white py-5  items-center">
      <div className="flex gap-2 md:gap-4 justify-center items-center hover:text-white">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-16 md:w-24 object-cover rounded-full"
            src={assets.brand_icon}
            alt="logo"
          />
        </Link>
        <div className="text-xs md:text-base">
          <p>
            Patnaites | Media Platform
            <br />
            Serving contents since 2016
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-2.5 md:gap-4 text-xl md:text-2xl">
          <Link href="https://www.facebook.com/patnaite" target="_blank">
            <FaFacebookF className="hover:text-blue-400" />
          </Link>
          <Link href="https://www.instagram.com/patnaite" target="_blank">
            <FaInstagram className="hover:text-orange-500" />
          </Link>
          <Link
            href="https://www.youtube.com/@Patnaites_Official"
            target="_blank"
          >
            <FaYoutube className="hover:text-red-600" />
          </Link>
          <Link href="https://x.com/Patnaites2" target="_blank">
            <FaTwitter className="hover:text-blue-400" />
          </Link>
          <Link href="https://patnaites.vercel.app" target="_blank">
            <FaRegUserCircle className="hover:text-blue-400" />
          </Link>
        </div>
        <p className="text-xs md:text-base">
          &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
