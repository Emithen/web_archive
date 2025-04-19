import React, { useState } from "react";
import styled from "@emotion/styled";

interface TabProps {
  tabs: string[];
}

const BaseTab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default BaseTab;

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 4px;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  background: none;
  border: none;
  border-bottom: 2px solid
    ${({ isActive }) => (isActive ? "#007bff" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#007bff" : "#555")};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

