import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;

        z-index: 1200;

        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        padding: 0;

        color: var(--heading);
        background: var(--card);

        border: 1px solid var(--border-strong);

        border-radius: 10px;

        box-shadow: var(--shadow-md);

        opacity: ${({ $visible }) => ($visible ? 1 : 0)};

        visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};

        pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-lg);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 42px;
            height: 42px;
        }
    `,
};
