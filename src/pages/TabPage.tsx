import BaseTab from "../components/Tab/BaseTab";

const TabPage: React.FC = () => {
  return (
    <div>
      <BaseTab tabs={["Home", "Profile", "Settings"]} />
    </div>
  );
};

export default TabPage;
