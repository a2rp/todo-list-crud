import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        background: linear-gradient(180deg, #060606, #030303);

        border-top: 1px solid var(--border);

        box-shadow: 0 -12px 34px rgba(0, 0, 0, 0.18);

        transition: border-color var(--transition);

        &:hover {
            border-color: var(--border-strong);
        }

        .inner {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            width: min(1180px, calc(100% - 40px));

            margin: 0 auto;

            padding: 34px 0;
        }

        .info {
            max-width: 520px;
        }

        .info strong {
            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        .info:hover strong {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
        }

        .text {
            margin-top: 7px;

            color: var(--muted);

            font-size: 0.58rem;
            line-height: 1.7;

            transition: color var(--transition);
        }

        .info:hover .text {
            color: var(--text);
        }

        .copyright {
            margin-top: 10px;

            color: var(--muted);

            font-size: 0.56rem;
        }

        .copyright a {
            color: var(--text);

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .copyright a:hover {
            color: var(--heading);

            border-color: var(--accent);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.14);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;

            max-width: 440px;
        }

        .links a {
            display: grid;
            place-items: center;

            width: 36px;
            height: 36px;

            color: var(--text);

            background: linear-gradient(180deg, #101010, #090909);

            border: 1px solid var(--border);

            border-radius: 8px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

            text-decoration: none;

            transition:
                color var(--transition),
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .links a:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm),
                0 0 18px rgba(254, 69, 0, 0.05);
        }

        .copyright a:focus-visible,
        .links a:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 800px) {
            .inner {
                align-items: flex-start;
                flex-direction: column;

                width: calc(100% - 28px);
            }

            .links {
                justify-content: flex-start;

                max-width: 100%;
            }
        }

        @media (max-width: 375px) {
            .links a {
                width: 34px;
                height: 34px;
            }
        }
    `,
};
