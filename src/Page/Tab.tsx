import BaseTab from "../Component/baseTab";

const Tab: React.FC = () => {
  return (
    <div>
      <BaseTab tabs={["Home", "Profile", "Settings"]} />
    </div>
  );
};

export default Tab;
