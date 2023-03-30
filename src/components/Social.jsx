import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import "../styles/components/social.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/tao-oliveira-0b5b4b1b3/",
  },
  { name: "github", icon: <FaGithub />, url: "https://github.com/1pedr1n" },
  { name: "twitter", icon: <FaTwitter />, url: "https://twitter.com/1pedr1n" },
];

const Social = () => {
  return (
    <section id="social">
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          id={social.name}
        >
          <div id={social.name}> {social.icon}</div>
        </a>
      ))}
    </section>
  );
};

export default Social;
