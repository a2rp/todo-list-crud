import styled, { css } from "styled-components";

export const Styled = {
    Page: styled.main`
        min-height: 100vh;

        padding-top: 72px;

        background:
            radial-gradient(
                circle at 8% 7%,
                rgba(254, 69, 0, 0.06),
                transparent 30rem
            ),
            linear-gradient(
                180deg,
                var(--background),
                #060606 55%,
                var(--background)
            );
    `,

    Container: styled.div`
        width: min(1180px, calc(100% - 40px));

        margin: 0 auto;

        padding: 78px 0 90px;

        @media (max-width: 760px) {
            width: calc(100% - 28px);

            padding: 60px 0 70px;
        }
    `,

    Intro: styled.section`
        display: grid;
        grid-template-columns:
            minmax(0, 1fr)
            auto;

        align-items: end;
        gap: 50px;

        margin-bottom: 42px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
            gap: 28px;
        }
    `,

    Label: styled.p`
        color: var(--accent);

        font-size: 0.62rem;
        font-weight: 800;
        letter-spacing: 0.13em;
        text-transform: uppercase;

        text-shadow: 0 0 18px rgba(254, 69, 0, 0.18);
    `,

    Title: styled.h1`
        max-width: 760px;

        margin-top: 10px;

        color: var(--heading);

        font-family: "Antonio", sans-serif;

        font-size: clamp(4rem, 8vw, 7.2rem);

        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 0.9;

        text-shadow: 0 8px 28px rgba(0, 0, 0, 0.34);

        span {
            display: block;

            color: var(--muted);

            transition:
                color var(--transition),
                text-shadow var(--transition);
        }

        &:hover span {
            color: #777777;

            text-shadow: 0 0 26px rgba(255, 255, 255, 0.035);
        }
    `,

    Subtitle: styled.p`
        max-width: 620px;

        margin-top: 22px;

        color: var(--text);

        font-size: 0.75rem;
        line-height: 1.9;

        transition: color var(--transition);

        &:hover {
            color: var(--text-strong);
        }
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 92px);

        gap: 8px;

        div {
            padding: 16px 12px;

            text-align: center;

            background: linear-gradient(145deg, #111111, #0a0a0a);

            border: 1px solid var(--border);

            border-radius: 12px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            transition:
                border-color var(--transition),
                box-shadow var(--transition);
        }

        div:hover {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.045),
                var(--shadow-sm),
                var(--shadow-accent);
        }

        strong {
            display: block;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.6rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        div:hover strong {
            text-shadow: 0 0 18px rgba(254, 69, 0, 0.18);
        }

        span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.52rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        @media (max-width: 420px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `,

    Card: styled.section`
        padding: 22px;

        background: linear-gradient(145deg, #101010, #0b0b0b);

        border: 1px solid var(--border);

        border-radius: 16px;

        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.025),
            var(--shadow-xs);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                var(--shadow-md);
        }
    `,

    CardHeader: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 20px;

        h2 {
            margin-top: 5px;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.45rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        &:hover h2 {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.055);
        }

        > svg {
            color: var(--accent);

            font-size: 1.2rem;

            filter: drop-shadow(0 0 8px rgba(254, 69, 0, 0.18));
        }
    `,

    SectionLabel: styled.p`
        color: var(--accent);

        font-size: 0.55rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;

        text-shadow: 0 0 14px rgba(254, 69, 0, 0.16);
    `,

    FormRow: styled.div`
        display: grid;

        grid-template-columns:
            minmax(200px, 1fr)
            210px
            170px
            auto;

        gap: 9px;

        @media (max-width: 900px) {
            grid-template-columns:
                1fr
                1fr;
        }

        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,

    Input: styled.input`
        width: 100%;
        min-height: 44px;

        padding: 10px 12px;

        color: var(--heading);

        background: linear-gradient(180deg, #090909, #070707);

        border: 1px solid var(--border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.68rem;

        outline: none;

        color-scheme: dark;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.018);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &::placeholder {
            color: var(--muted);
        }

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.028),
                var(--shadow-xs);
        }

        &:focus {
            border-color: var(--accent-border-strong);

            box-shadow:
                0 0 0 3px rgba(254, 69, 0, 0.055),
                var(--shadow-sm);
        }
    `,

    PrimaryButton: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 44px;

        padding: 10px 14px;

        color: #ffffff;

        background: linear-gradient(180deg, #ff5012, var(--accent));

        border: 1px solid var(--accent);

        border-radius: 8px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);

        font: inherit;
        font-size: 0.64rem;
        font-weight: 800;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: #ff7442;

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.22),
                0 10px 28px rgba(254, 69, 0, 0.18);

            text-shadow: 0 0 12px rgba(255, 255, 255, 0.35);
        }

        &:focus-visible {
            outline: 2px solid var(--heading);

            outline-offset: 3px;
        }

        &:disabled {
            opacity: 0.38;
            cursor: not-allowed;
        }
    `,

    Toolbar: styled.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        margin: 16px 0 32px;

        padding: 14px;

        background: linear-gradient(145deg, #0c0c0c, #080808);

        border: 1px solid var(--border);

        border-radius: 12px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm);
        }

        @media (max-width: 900px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,

    Filters: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        @media (max-width: 650px) {
            display: grid;
            grid-template-columns: 1fr;
        }
    `,

    Field: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;

        min-height: 42px;

        padding-left: 11px;

        color: var(--muted);

        background: linear-gradient(180deg, #111111, #0c0c0c);

        border: 1px solid var(--border);

        border-radius: 8px;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--text);

            border-color: var(--border-strong);

            box-shadow: var(--shadow-xs);
        }

        &:focus-within {
            color: var(--accent);

            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        > svg {
            flex-shrink: 0;
        }
    `,

    Select: styled.select`
        min-height: 40px;

        padding: 8px 30px 8px 0;

        color: var(--heading);
        background: transparent;

        border: 0;

        outline: none;

        font: inherit;
        font-size: 0.63rem;

        cursor: pointer;

        color-scheme: dark;

        option {
            color: var(--heading);
            background: var(--card);
        }
    `,

    SearchField: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;

        min-height: 42px;

        padding: 0 10px;

        color: var(--muted);

        background: linear-gradient(180deg, #111111, #0c0c0c);

        border: 1px solid var(--border);

        border-radius: 8px;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--text);

            border-color: var(--border-strong);

            box-shadow: var(--shadow-xs);
        }

        &:focus-within {
            color: var(--accent);

            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        input {
            width: 190px;

            padding: 10px 0;

            color: var(--heading);
            background: transparent;

            border: 0;

            outline: 0;

            font: inherit;
            font-size: 0.63rem;
        }

        input::placeholder {
            color: var(--muted);
        }

        button {
            display: grid;
            place-items: center;

            width: 28px;
            height: 28px;

            padding: 0;

            color: var(--muted);
            background: transparent;

            border: 0;

            cursor: pointer;

            transition:
                color var(--transition),
                text-shadow var(--transition);
        }

        button:hover {
            color: var(--heading);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 650px) {
            input {
                width: 100%;
            }
        }
    `,

    BulkActions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        @media (max-width: 560px) {
            display: grid;
            grid-template-columns: 1fr;
        }
    `,

    Button: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 12px;

        color: var(--heading);

        background: linear-gradient(180deg, #121212, #0d0d0d);

        border: 1px solid var(--border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.61rem;
        font-weight: 700;

        cursor: pointer;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.12);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.34;
            cursor: not-allowed;
        }
    `,

    DangerButton: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 12px;

        color: var(--danger);

        background: linear-gradient(
            180deg,
            rgba(255, 102, 102, 0.065),
            rgba(255, 102, 102, 0.035)
        );

        border: 1px solid var(--danger-border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.61rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: rgba(255, 102, 102, 0.7);

            box-shadow: 0 10px 26px rgba(255, 102, 102, 0.07);

            text-shadow: 0 0 12px rgba(255, 102, 102, 0.15);
        }

        &:focus-visible {
            outline: 2px solid var(--danger);

            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.32;
            cursor: not-allowed;
        }
    `,

    ResultsHeader: styled.div`
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 14px;

        h2 {
            margin-top: 4px;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.6rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        &:hover h2 {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.055);
        }

        > span {
            color: var(--muted);

            font-size: 0.58rem;
            font-weight: 700;
        }
    `,

    List: styled.div`
        display: grid;
        gap: 9px;
    `,

    Empty: styled.div`
        display: grid;
        justify-items: center;
        gap: 8px;

        padding: 54px 20px;

        text-align: center;

        background: linear-gradient(145deg, #0f0f0f, #090909);

        border: 1px dashed var(--border-strong);

        border-radius: 14px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        > svg {
            color: var(--accent);

            font-size: 1.35rem;
        }

        strong {
            color: var(--heading);

            font-size: 0.72rem;
        }

        span {
            color: var(--muted);

            font-size: 0.62rem;
        }
    `,

    Item: styled.article`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 16px;

        background: linear-gradient(145deg, #0f0f0f, #0a0a0a);

        border: 1px solid
            ${({ $overdue }) =>
                $overdue ? "var(--danger-border)" : "var(--border)"};

        border-radius: 12px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.018);

        opacity: ${({ $done }) => ($done ? 0.64 : 1)};

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            opacity var(--transition);

        &:hover {
            border-color: ${({ $overdue }) =>
                $overdue
                    ? "rgba(255, 102, 102, 0.62)"
                    : "var(--accent-border)"};

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-md);

            opacity: 1;
        }

        @media (max-width: 620px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,

    ItemLeft: styled.div`
        display: flex;
        align-items: flex-start;
        gap: 13px;

        min-width: 0;
        flex: 1;
    `,

    CheckboxLabel: styled.label`
        position: relative;

        display: grid;
        place-items: center;

        width: 22px;
        height: 22px;

        flex-shrink: 0;

        margin-top: 1px;

        cursor: pointer;

        input {
            position: absolute;

            width: 1px;
            height: 1px;

            opacity: 0;
        }

        span {
            display: grid;
            place-items: center;

            width: 22px;
            height: 22px;

            color: transparent;

            background: linear-gradient(180deg, #0a0a0a, #070707);

            border: 1px solid var(--border-strong);

            border-radius: 6px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            transition:
                border-color var(--transition),
                box-shadow var(--transition),
                color var(--transition);
        }

        &:hover span {
            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        input:checked + span {
            color: #ffffff;

            background: linear-gradient(180deg, #ff5518, var(--accent));

            border-color: var(--accent);

            box-shadow: 0 8px 20px rgba(254, 69, 0, 0.14);
        }

        input:focus-visible + span {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }
    `,

    ItemContent: styled.div`
        min-width: 0;
        flex: 1;
    `,

    ItemTitle: styled.h3`
        color: var(--heading);

        font-size: 0.72rem;
        font-weight: 700;
        line-height: 1.5;

        overflow-wrap: anywhere;

        transition:
            color var(--transition),
            text-shadow var(--transition);

        ${({ $done }) =>
            $done &&
            css`
                color: var(--muted);

                text-decoration: line-through;
            `}

        &:hover {
            text-shadow: 0 0 14px rgba(255, 255, 255, 0.08);
        }
    `,

    ItemMeta: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        margin-top: 8px;

        color: var(--muted);

        font-size: 0.56rem;

        .date {
            display: inline-flex;
            align-items: center;
            gap: 5px;

            transition: color var(--transition);
        }

        .date:hover {
            color: var(--text);
        }
    `,

    Tag: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 5px;

        padding: 4px 7px;

        color: ${({ $muted }) => ($muted ? "var(--muted)" : "var(--text)")};

        background: rgba(255, 255, 255, 0.012);

        border: 1px solid var(--border);

        border-radius: 999px;

        font-size: 0.54rem;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow: 0 0 18px rgba(254, 69, 0, 0.05);
        }
    `,

    DueHint: styled.span`
        padding: 4px 7px;

        color: ${({ $overdue }) =>
            $overdue ? "var(--danger)" : "var(--text)"};

        background: ${({ $overdue }) =>
            $overdue ? "var(--danger-soft)" : "rgba(255, 255, 255, 0.018)"};

        border: 1px solid
            ${({ $overdue }) =>
                $overdue ? "var(--danger-border)" : "var(--border)"};

        border-radius: 999px;

        font-weight: 700;

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: ${({ $overdue }) =>
                $overdue ? "rgba(255, 102, 102, 0.6)" : "var(--border-strong)"};

            box-shadow: var(--shadow-xs);
        }
    `,

    ItemActions: styled.div`
        display: flex;
        align-items: center;
        gap: 7px;

        @media (max-width: 620px) {
            justify-content: flex-end;
        }
    `,

    IconButton: styled.button`
        display: grid;
        place-items: center;

        width: 38px;
        height: 38px;

        padding: 0;

        color: var(--text);

        background: linear-gradient(180deg, #101010, #0a0a0a);

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                var(--shadow-sm),
                0 0 20px rgba(254, 69, 0, 0.05);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,

    DeleteButton: styled.button`
        display: grid;
        place-items: center;

        width: 38px;
        height: 38px;

        padding: 0;

        color: var(--danger);

        background: linear-gradient(
            180deg,
            rgba(255, 102, 102, 0.055),
            rgba(255, 102, 102, 0.025)
        );

        border: 1px solid var(--danger-border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: rgba(255, 102, 102, 0.68);

            box-shadow: 0 10px 24px rgba(255, 102, 102, 0.07);

            text-shadow: 0 0 10px rgba(255, 102, 102, 0.2);
        }

        &:focus-visible {
            outline: 2px solid var(--danger);

            outline-offset: 2px;
        }
    `,

    EditItem: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        padding: 14px;

        background: linear-gradient(145deg, #101010, #090909);

        border: 1px solid var(--accent-border);

        border-radius: 12px;

        box-shadow: 0 12px 34px rgba(254, 69, 0, 0.06);

        @media (max-width: 760px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,

    EditFields: styled.div`
        display: grid;

        grid-template-columns:
            minmax(200px, 1fr)
            180px
            165px;

        gap: 8px;

        min-width: 0;
        flex: 1;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    EditActions: styled.div`
        display: flex;
        gap: 7px;

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns:
                1fr
                1fr;
        }
    `,

    StorageNote: styled.p`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        margin-top: 24px;

        color: var(--muted);

        font-size: 0.58rem;
        line-height: 1.6;

        text-align: center;

        transition:
            color var(--transition),
            text-shadow var(--transition);

        &:hover {
            color: var(--text);

            text-shadow: 0 0 14px rgba(255, 255, 255, 0.035);
        }

        svg {
            flex-shrink: 0;

            color: var(--accent);
        }
    `,
};
