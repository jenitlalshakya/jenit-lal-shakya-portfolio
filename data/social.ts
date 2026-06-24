import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/jenitlalshakya",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jenit-lal-shakya-602462400/",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:shakyajenit@gmail.com",
    icon: HiOutlineMail,
  },
];
