import { ReactNode, useState } from "react";
import { Item } from "./Item";

import { Logo } from "../..";

interface Props {
  children: ReactNode;
  items: string[];
  selectedIndex: number;
}

export const SideBarLayout = ({ children, items, selectedIndex }: Props) => {
  const [selected, setSelected] = useState(selectedIndex);

  return (
    <div className="flex h-screen bg-gray300">
      <div className="bg-gray200 border-r border-gray100  sm:w-80">
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
                <div key={item} onClick={() => setSelected(index)}>
                  <Item label={item} selected={selected === index} />
                </div>
              ))}
            </div>
          </div>
          <button className="m-4 p-3 bg-primary text-white rounded font-bold">
            Novo time
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <div className="bg-gray200 p-3 font-bold text-white text-3xl">
          {items[selected]}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
