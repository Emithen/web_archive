import React from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";

const App: React.FC = () => {
  const handleSelect = (option: string) => {
    console.log("선택된 옵션:", option);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dropdown Example</h1>
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
