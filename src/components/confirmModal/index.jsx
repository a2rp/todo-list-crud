import { useEffect, useRef } from "react";

import { FiAlertTriangle, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const ConfirmModal = ({
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    tone = "default",
    onConfirm,
    onCancel,
}) => {
    const dialogRef = useRef(null);
    const confirmButtonRef = useRef(null);

    useEffect(() => {
        const previousActiveElement = document.activeElement;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        confirmButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onCancel();

                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const focusableElements = dialogRef.current?.querySelectorAll(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );

            if (!focusableElements || focusableElements.length === 0) {
                return;
            }

            const firstElement = focusableElements[0];

            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            document.removeEventListener("keydown", handleKeyDown);

            previousActiveElement?.focus?.();
        };
    }, [onCancel]);

    return (
        <Styled.Overlay
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onCancel();
                }
            }}
        >
            <Styled.Dialog
                ref={dialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-modal-title"
                aria-describedby={message ? "confirm-modal-message" : undefined}
            >
                <Styled.Header>
                    <Styled.Icon $tone={tone}>
                        <FiAlertTriangle aria-hidden="true" />
                    </Styled.Icon>

                    <Styled.Heading>
                        <h2 id="confirm-modal-title">{title}</h2>

                        {message && <p id="confirm-modal-message">{message}</p>}
                    </Styled.Heading>

                    <Styled.CloseButton
                        type="button"
                        onClick={onCancel}
                        aria-label="Close confirmation dialog"
                        title="Close"
                    >
                        <FiX aria-hidden="true" />
                    </Styled.CloseButton>
                </Styled.Header>

                <Styled.Actions>
                    <Styled.CancelButton type="button" onClick={onCancel}>
                        {cancelText}
                    </Styled.CancelButton>

                    <Styled.ConfirmButton
                        ref={confirmButtonRef}
                        type="button"
                        $tone={tone}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </Styled.ConfirmButton>
                </Styled.Actions>
            </Styled.Dialog>
        </Styled.Overlay>
    );
};

export default ConfirmModal;
