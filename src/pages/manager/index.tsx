import { useState } from "react";
import toast from "react-hot-toast";
import { GetServerSideProps } from "next";

import { ITask, ITeam } from "../../interfaces";

import { SideBarLayout } from "../../components/layout/";
import { Modal, TextField } from "../../components";

import { TeamController, TaskController } from "../../controllers/";
import { getAPIClient } from "../../services/api";

interface Props {
  teams: ITeam[];
  tasks: ITask[];
}

const Manager = ({ teams, tasks }: Props) => {
  const teamController = new TeamController(getAPIClient());
  const taskController = new TaskController(getAPIClient());

  const [_teams, setTeams] = useState<ITeam[]>(teams);
  const [_tasks, setTasks] = useState<ITask[]>(tasks);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleAddTask = async () => {
    try {
      await taskController.create({
        name: taskName,
        end_time: new Date(),
        start_time: new Date(),
      });

      const response = await taskController.listAll();

      setTasks(response);
    } catch (error) {
      toast("Erro interno");
    } finally {
      setTaskName("");
      setShowTaskModal(false);
    }
  };

  const handleAddTeam = async () => {
    try {
      await teamController.create({ name: teamName });

      const response = await teamController.listAll();

      setTeams(response);
    } catch (error) {
      toast("Erro interno");
    } finally {
      setTeamName("");
      setShowTeamModal(false);
    }
  };

  return (
    <div>
      <SideBarLayout
        items={_teams.map((team) => team.name)}
        selectedIndex={0}
        handleNewTask={() => setShowTaskModal(true)}
        handleNewTeam={() => setShowTeamModal(true)}
      >
        <div className="flex flex-col gap-4">
          {_tasks.map((task) => (
            <div className="bg-gray-100 p-2 rounded" key={task.id}>
              {task.name}
            </div>
          ))}
        </div>
      </SideBarLayout>
      {showTeamModal && (
        <Modal title="Novo time" onClose={() => setShowTeamModal(false)}>
          <div className="flex flex-col gap-4">
            <TextField label="Nome" setValue={setTeamName} value={teamName} />

            <button
              className="bg-primary rounded p-2 text-white"
              onClick={handleAddTeam}
            >
              Criar novo time
            </button>
          </div>
        </Modal>
      )}
      {showTaskModal && (
        <Modal title="Nova Tarefa" onClose={() => setShowTaskModal(false)}>
          <div className="flex flex-col gap-4">
            <TextField label="Nome" setValue={setTaskName} value={taskName} />

            <button className="button" onClick={handleAddTask}>
              Criar nova tarefa
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

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

export default Manager;
