import { ReactNode, useState } from "react";

import { Item } from "./Item";
import { Logo } from "../../index";

interface Props {
  children: ReactNode;
  items: string[];
  selectedIndex: number;
  handleNewTask: () => void;
  handleNewTeam: () => void;
}

export const SideBarLayout = ({
  children,
  items,
  selectedIndex,
  handleNewTask,
  handleNewTeam,
}: Props) => {
  const [selected, setSelected] = useState(selectedIndex);

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="bg-gray-200 border-r border-gray-100  sm:w-80">
        <div className="flex flex-col justify-between h-full">
          <div className="pr-8">
            <div className="flex m-6">
              <Logo />
            </div>
            <div className="ml-6">
              <p className="font-bold">Seus times ({items.length})</p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {items.map((item, index) => (
                <div key={index} onClick={() => setSelected(index)}>
                  <Item label={item} selected={selected === index} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="m-4 p-3 bg-primary text-white rounded font-bold"
            onClick={handleNewTeam}
          >
            Novo time
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex justify-between bg-gray-200 p-3">
          <p className="font-bold text-white text-3xl">{items[selected]}</p>
          <button
            className="flex items-center gap-2 pl-4 pr-4 bg-primary text-white rounded text-md  font-bold"
            onClick={handleNewTask}
          >
            <div className="bg-add bg-contain w-6 h-6 "></div>
            Nova tarefa
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
