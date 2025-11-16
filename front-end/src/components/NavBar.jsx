import CardNav from './CardNav'
//import logo from '../logo.svg';
import logo from '../assets/gradpic.png';
import { Link } from 'react-router-dom';

const NavBar = () => {


  const items = [
    {
      label: "About",
      bgColor: "oklch(67.3% 0.182 276.935)",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
        { label: "Experience", ariaLabel: "About Experience", href: "/experience" }
      ]
    },
    {
      label: "Projects",
      bgColor: "oklch(70.2% 0.183 293.541)",
      textColor: "#fff",
      links: [
        { label: "See More", ariaLabel: "See More Projects", href: "/projects" },

      ]
    },
    {
      label: "Contact",
      bgColor: "oklch(90.3% 0.076 319.62)",
      textColor: "#000",
      links: [
        { label: "Email", ariaLabel: "Email Me", href: "mailto:everettmoss.cs@gmail.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://www.linkedin.com/in/everettmoss/" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/everettmoss/" },
        { label: "Github", ariaLabel: "Github", href: "https://github.com/EverettMoss" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};





export default NavBar
