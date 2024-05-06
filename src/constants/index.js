import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const navlinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Our Services",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

export const socials = [
  {
    id: "facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
  },
  {
    id: "tiktok",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/",
  },
  {
    id: "twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/",
  },
];
