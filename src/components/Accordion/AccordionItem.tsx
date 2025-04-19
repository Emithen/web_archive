import React, { ReactNode } from "react";

export interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = true,
    onToggle,
}) => {
    return (
        <div style={{ border: "1px solid #ccc", marginBottom: "8px" }}>
            <button
                onClick={onToggle}
                style={{ width: "100%", textAlign: "left", padding: "8px" }}
            >
                {title}
            </button>
            {isOpen && <div style={{ padding: "8px" }}>{children}</div>}
        </div>
    );
};