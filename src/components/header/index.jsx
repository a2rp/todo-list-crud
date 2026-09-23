import { useEffect, useRef, useState } from "react";

import { FiGithub, FiMenu, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Header = () => {
    const lastScrollYRef = useRef(0);

    const [isVisible, setIsVisible] = useState(true);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 20 || isMenuOpen) {
                setIsVisible(true);
            } else {
                setIsVisible(currentScrollY < lastScrollYRef.current);
            }

            lastScrollYRef.current = currentScrollY;
        };

        lastScrollYRef.current = window.scrollY;

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 760) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("keydown", handleEscape);

            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Styled.Wrapper $visible={isVisible || isMenuOpen}>
            <div className="inner">
                <a
                    className="brand"
                    href="#top"
                    onClick={closeMenu}
                    aria-label="To-Do List home"
                >
                    <img
                        className="logo"
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt=""
                        aria-hidden="true"
                    />

                    <div className="brandText">
                        <strong>To-Do List</strong>

                        <span>Local Task Manager</span>
                    </div>
                </a>

                <nav className="desktopNav" aria-label="Primary navigation">
                    <a href="#tasks">Tasks</a>

                    <a href="#add-task">Add Task</a>
                </nav>

                <div className="actions">
                    <a
                        className="iconButton"
                        href="https://github.com/a2rp/todo-list-crud"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project on GitHub"
                        title="View on GitHub"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>

                    <button
                        className="menuButton"
                        type="button"
                        onClick={() => {
                            setIsVisible(true);

                            setIsMenuOpen((current) => !current);
                        }}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        title={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <FiX aria-hidden="true" />
                        ) : (
                            <FiMenu aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className="mobileNav"
                    aria-label="Mobile navigation"
                >
                    <div className="mobileNavInner">
                        <a href="#tasks" onClick={closeMenu}>
                            Tasks
                        </a>

                        <a href="#add-task" onClick={closeMenu}>
                            Add Task
                        </a>
                    </div>
                </nav>
            )}
        </Styled.Wrapper>
    );
};

export default Header;
