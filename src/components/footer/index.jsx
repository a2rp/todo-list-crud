import {
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { SiPatreon } from "react-icons/si";

import { Styled } from "./styled";

const links = [
    {
        id: "portfolio",
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
        icon: <FiGlobe aria-hidden="true" />,
    },
    {
        id: "github",
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: <FiGithub aria-hidden="true" />,
    },
    {
        id: "codepen",
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        icon: <FiCodepen aria-hidden="true" />,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: <FiLinkedin aria-hidden="true" />,
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish",
        icon: <FiFacebook aria-hidden="true" />,
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",
        icon: <FiYoutube aria-hidden="true" />,
    },
    {
        id: "email",
        label: "Email",
        href: "mailto:ash.ranjan09@gmail.com",
        icon: <FiMail aria-hidden="true" />,
        newTab: false,
    },
    {
        id: "support",
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: <FiHeart aria-hidden="true" />,
    },
    {
        id: "coffee",
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: <FiCoffee aria-hidden="true" />,
    },
    {
        id: "patreon",
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        icon: <SiPatreon aria-hidden="true" />,
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="info">
                    <strong>To-Do List CRUD</strong>

                    <p className="text">
                        Local task management with categories, due dates,
                        search, filtering and browser storage.
                    </p>

                    <p className="copyright">
                        Copyright &copy; {currentYear}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </p>
                </div>

                <nav className="links" aria-label="External links">
                    {links.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target={
                                item.newTab === false ? undefined : "_blank"
                            }
                            rel={
                                item.newTab === false
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            aria-label={item.label}
                            title={item.label}
                        >
                            {item.icon}
                        </a>
                    ))}
                </nav>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
