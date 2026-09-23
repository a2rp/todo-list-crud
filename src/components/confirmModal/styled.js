import styled from "styled-components";

export const Styled = {
    Overlay: styled.div`
        position: fixed;
        inset: 0;

        z-index: 2000;

        display: grid;
        place-items: center;

        padding: 20px;

        background: rgba(0, 0, 0, 0.78);

        backdrop-filter: blur(10px);
    `,

    Dialog: styled.div`
        width: min(500px, 100%);

        padding: 22px;

        color: var(--text);

        background: linear-gradient(145deg, #121212, #0a0a0a);

        border: 1px solid var(--border-strong);

        border-radius: 16px;

        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            var(--shadow-lg);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.045),
                var(--shadow-lg),
                0 0 34px rgba(254, 69, 0, 0.045);
        }
    `,

    Header: styled.div`
        display: grid;
        grid-template-columns:
            auto
            minmax(0, 1fr)
            auto;

        align-items: start;
        gap: 14px;
    `,

    Icon: styled.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        color: ${({ $tone }) =>
            $tone === "danger" ? "var(--danger)" : "var(--accent)"};

        background: ${({ $tone }) =>
            $tone === "danger" ? "var(--danger-soft)" : "var(--accent-soft)"};

        border: 1px solid
            ${({ $tone }) =>
                $tone === "danger"
                    ? "var(--danger-border)"
                    : "var(--accent-border)"};

        border-radius: 10px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

        font-size: 1rem;

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            box-shadow: var(--shadow-sm);
        }
    `,

    Heading: styled.div`
        min-width: 0;

        h2 {
            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.45rem;
            font-weight: 600;
            letter-spacing: 0.01em;

            transition: text-shadow var(--transition);
        }

        h2:hover {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
        }

        p {
            margin-top: 7px;

            color: var(--text);

            font-size: 0.7rem;
            line-height: 1.7;
        }
    `,

    CloseButton: styled.button`
        display: grid;
        place-items: center;

        width: 36px;
        height: 36px;

        padding: 0;

        color: var(--text);

        background: linear-gradient(180deg, #111111, #0b0b0b);

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            color var(--transition),
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,

    Actions: styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 9px;

        margin-top: 24px;

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    `,

    CancelButton: styled.button`
        min-height: 42px;

        padding: 9px 14px;

        color: var(--heading);

        background: linear-gradient(180deg, #121212, #0c0c0c);

        border: 1px solid var(--border-strong);

        border-radius: 8px;

        font-size: 0.65rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,

    ConfirmButton: styled.button`
        min-height: 42px;

        padding: 9px 14px;

        color: #ffffff;

        background: ${({ $tone }) =>
            $tone === "danger"
                ? "linear-gradient(180deg, #ff7474, #e94d4d)"
                : "linear-gradient(180deg, #ff5518, var(--accent))"};

        border: 1px solid
            ${({ $tone }) =>
                $tone === "danger" ? "var(--danger)" : "var(--accent)"};

        border-radius: 8px;

        font-size: 0.65rem;
        font-weight: 800;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: ${({ $tone }) =>
                $tone === "danger" ? "#ff8a8a" : "#ff7442"};

            box-shadow: ${({ $tone }) =>
                $tone === "danger"
                    ? "0 10px 28px rgba(255, 102, 102, 0.13)"
                    : "0 10px 28px rgba(254, 69, 0, 0.16)"};

            text-shadow: 0 0 12px rgba(255, 255, 255, 0.28);
        }

        &:focus-visible {
            outline: 2px solid var(--heading);

            outline-offset: 3px;
        }
    `,
};
