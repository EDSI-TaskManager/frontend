import { GetServerSideProps } from "next";
import { Header } from "../../../components/Header";
import { Dashboard } from "../../../components/layout/Dashboard";
import { TaskController, TeamController } from "../../../controllers";
import { ITask, ITeam } from "../../../interfaces";
import { getAPIClient } from "../../../services/api";

interface Props {
  teams: ITeam[];
  tasks: ITask[];
}

const Employee = ({ teams, tasks }: Props) => {
  return (
    <div className="h-screen flex flex-col bg-gray-400">
      <Header pageName="DASHBOARD" />
      <Dashboard>
        <div className="bg-gray-100 w-full row-start-1 row-end-3 rounded-lg p-4 flex flex-col gap-4">
          <div className="border-b pb-2 border-white font-bold text-xl text-white">
            Seus Times
          </div>
          {teams.map((team) => (
            <div
              key={team.id}
              className="p-4 rounded bg-gray-200 border-gray-400 border hover:grayscale"
            >
              {team.name}
            </div>
          ))}
        </div>
        <div className="bg-gray-100 w-full rounded-lg"></div>
        <div className="bg-gray-100 w-full rounded-lg">item</div>
        <div className="bg-gray-100 w-full row-start-1 row-end-3 rounded-lg p-4 flex flex-col gap-4">
          <div className="border-b pb-2 border-white font-bold text-xl text-white">
            Suas Tarefas
          </div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 rounded bg-gray-200 border-gray-400 border hover:grayscale"
            >
              {task.name}
            </div>
          ))}
        </div>
      </Dashboard>
    </div>
  );
};

export default Employee;

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
