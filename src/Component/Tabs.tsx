import React, { useState } from "react";
import styled from "@emotion/styled";

interface TabProps {
  tabs: string[];
}

const Tabs: React.FC<TabProps> = ({ tabs }) => {
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

export default Tabs;

const TabContainer = styled.div``;

const TabButton = styled.button<{ isActive: boolean }>``;
