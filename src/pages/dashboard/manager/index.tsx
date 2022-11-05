import { GetServerSideProps } from "next";
import { Header } from "../../../components/Header";
import { Dashboard } from "../../../components/layout/Dashboard";
import { TaskController, TeamController } from "../../../controllers";
import { getAPIClient } from "../../../services/api";

// import { ITask, ITeam } from "../../../interfaces";
// interface Props {
//   teams: ITeam[];
//   tasks: ITask[];
// }

const ManagerDashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-400">
      <Header pageName="DASHBOARD" />
      <Dashboard>
        <div className="bg-gray-100 w-full row-start-1 row-end-4 rounded-lg p-4">
          item
        </div>
        <div className="bg-gray-100 w-full rounded-lg">item</div>
        <div className="bg-gray-100 w-full rounded-lg">item</div>
        <div className="bg-gray-100 w-full rounded-lg">item</div>
        <div className="bg-gray-100 w-full row-start-1 row-end-4 col-start-3 rounded-lg">
          item
        </div>
      </Dashboard>
    </div>
  );
};

export default ManagerDashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);

  const teamController = new TeamController(api);
  const taskController = new TaskController(api);

  try {
    const [teams, tasks] = await Promise.all([
      teamController.listAll(),
      taskController.listAll(),
    ]);

    return { props: { teams: teams || [], tasks: tasks || [] } };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};
