import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jatinjhakashyap" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jatin-kashyap-749b31185/" },
  { icon: <FaTwitter />, path: "https://x.com/jatink1402" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
