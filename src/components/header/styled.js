import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;

        top: ${({ $visible }) => ($visible ? "0" : "-82px")};

        left: 0;

        z-index: 1000;

        width: 100%;

        background: linear-gradient(
            180deg,
            rgba(8, 8, 8, 0.97),
            rgba(5, 5, 5, 0.92)
        );

        border-bottom: 1px solid var(--border);

        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

        backdrop-filter: blur(18px);

        transition:
            top var(--transition),
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);
        }

        .inner {
            display: grid;
            grid-template-columns:
                auto
                1fr
                auto;

            align-items: center;
            gap: 24px;

            width: min(1180px, calc(100% - 40px));

            min-height: 72px;

            margin: 0 auto;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            color: var(--heading);

            text-decoration: none;
        }

        .logo {
            width: 42px;
            height: 42px;

            flex-shrink: 0;

            object-fit: cover;

            border: 1px solid var(--border);

            border-radius: 10px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

            transition:
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .brand:hover .logo {
            border-color: var(--accent-border);

            box-shadow:
                var(--shadow-sm),
                0 0 22px rgba(254, 69, 0, 0.08);
        }

        .brandText {
            min-width: 0;
        }

        .brand strong {
            display: block;

            font-family: "Antonio", sans-serif;

            font-size: 1rem;
            font-weight: 600;
            line-height: 1.1;

            transition: text-shadow var(--transition);
        }

        .brand:hover strong {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.09);
        }

        .brand span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.5rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;

            transition: color var(--transition);
        }

        .brand:hover span {
            color: var(--text);
        }

        .desktopNav {
            display: flex;
            justify-content: center;
            gap: 22px;
        }

        .desktopNav a {
            position: relative;

            color: var(--text);

            font-size: 0.62rem;
            font-weight: 700;

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .desktopNav a:hover {
            color: var(--heading);

            border-color: var(--accent);

            text-shadow: 0 0 14px rgba(254, 69, 0, 0.16);
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .iconButton,
        .menuButton {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            padding: 0;

            color: var(--text);

            background: linear-gradient(180deg, #111111, #0b0b0b);

            border: 1px solid var(--border);

            border-radius: 9px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            text-decoration: none;

            cursor: pointer;

            transition:
                color var(--transition),
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .iconButton:hover,
        .menuButton:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                var(--shadow-sm),
                0 0 20px rgba(254, 69, 0, 0.05);
        }

        .menuButton {
            display: none;
        }

        .mobileNav {
            display: none;

            border-top: 1px solid var(--border);

            background: rgba(7, 7, 7, 0.98);

            box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
        }

        .mobileNavInner {
            display: grid;

            width: calc(100% - 28px);

            margin: 0 auto;

            padding: 10px 0 14px;
        }

        .mobileNav a {
            display: flex;
            align-items: center;

            min-height: 46px;

            padding: 8px 10px;

            color: var(--text);

            border-bottom: 1px solid var(--border);

            font-size: 0.66rem;
            font-weight: 700;

            text-decoration: none;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .mobileNav a:last-child {
            border-bottom: 0;
        }

        .mobileNav a:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.12);
        }

        .brand:focus-visible,
        .desktopNav a:focus-visible,
        .mobileNav a:focus-visible,
        .iconButton:focus-visible,
        .menuButton:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 760px) {
            .inner {
                grid-template-columns:
                    1fr
                    auto;

                width: calc(100% - 28px);
            }

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: grid;
            }

            .mobileNav {
                display: block;
            }
        }

        @media (max-width: 375px) {
            .brand span {
                display: none;
            }

            .logo {
                width: 38px;
                height: 38px;
            }

            .iconButton,
            .menuButton {
                width: 38px;
                height: 38px;
            }
        }
    `,
};
