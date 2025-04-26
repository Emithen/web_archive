import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ padding: "8px 16px" }}
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "4px",
            padding: "0",
            listStyle: "none",
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "100%",
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
