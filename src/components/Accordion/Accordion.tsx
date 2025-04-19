import React, { useState, ReactNode } from "react";
import { AccordionItemProps } from "./AccordionItem";

interface AccordionProps {
    children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    // props 를 AccordionItem 에 명시적으로 전달하지 않고 Accordion 에서 독단적으로 주입
    // -> cloneElement 기반 composite 패턴
    const childrenWithProps = React.Children.map(children, (child, index) => {
        if (!React.isValidElement<AccordionItemProps>(child)) return child;
        return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => toggleItem(index),  // AccordionItem 에서는 이런 걸 받는 지 모름
        });
    });

    return <div>{childrenWithProps}</div>;
};