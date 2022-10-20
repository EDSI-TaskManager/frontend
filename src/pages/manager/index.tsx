import { SideBarLayout } from "../../components/layout/";

const Manager = () => {
  return (
    <SideBarLayout items={["squad#1", "squad#2"]} selectedIndex={0}>
      Manager page works!
    </SideBarLayout>
  );
};

export default Manager;
