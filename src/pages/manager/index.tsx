import { GetServerSideProps } from "next";
import { useState } from "react";
import { SideBarLayout } from "../../components/layout/";
import { ITask, ITeam } from "../../interfaces";
import { Modal, TextField } from "../../components";

import { addNewTask } from "../../controllers/tasks/addNewTask";
import { listAllTasks } from "../../controllers/tasks/listAllTasks";

import { addNewTeam } from "../../controllers/teams/addNewTeam";
import { listAllTeams } from "../../controllers/teams/listAllTeams";
import toast from "react-hot-toast";

interface Props {
  teams: ITeam[];
  tasks: ITask[];
}

const Manager = ({ teams, tasks }: Props) => {
  const [_teams, setTeams] = useState<ITeam[]>(teams);
  const [_tasks, setTasks] = useState<ITask[]>(tasks);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleAddTask = async () => {
    try {
      await addNewTask({
        name: taskName,
        end_time: new Date(),
        start_time: new Date(),
      });

      const response = await listAllTasks();

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
      await addNewTeam({
        name: teamName,
      });

      const response = await listAllTeams();

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
            <div className="bg-gray100 p-2 rounded" key={task.id}>
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

            <button
              className="bg-primary rounded p-2 text-white"
              onClick={handleAddTask}
            >
              Criar nova tarefa
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [teams, tasks] = await Promise.all([listAllTeams(), listAllTasks()]);

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
