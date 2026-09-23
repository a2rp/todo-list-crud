import { useEffect, useState } from "react";

import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    return (
        <Styled.Wrapper
            type="button"
            $visible={isVisible}
            onClick={handleClick}
            aria-label="Back to top"
            title="Back to top"
        >
            <FiArrowUp aria-hidden="true" />
        </Styled.Wrapper>
    );
};

export default BackToTop;
