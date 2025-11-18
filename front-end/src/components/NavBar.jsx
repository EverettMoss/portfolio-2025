import CardNav from './CardNav'
//import logo from '../logo.svg';
import logo from '../assets/gradpic.png';
import { Link } from 'react-router-dom';

const NavBar = () => {


  const items = [
    {
      label: "About",
      bgColor: "oklch(90.1% 0.058 230.902)",
      textColor: "#000",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
        { label: "Experience", ariaLabel: "About Experience", href: "/experience" }
      ]
    },
    {
      label: "Projects",
      bgColor: "oklch(87% 0.065 274.039)",
      textColor: "#000",
      links: [
        { label: "See More", ariaLabel: "See More Projects", href: "/projects" },

      ]
    },
    {
      label: "Contact",
      bgColor: "oklch(90.2% 0.063 306.703)",
      textColor: "#000",
      links: [
        { label: "Email", ariaLabel: "Email Me", href: "mailto:everettmoss.cs@gmail.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/everettmoss/" },
        { label: "Github", ariaLabel: "Github", href: "https://github.com/EverettMoss", target: "_blank", rel: "noopener noreferrer" }
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
