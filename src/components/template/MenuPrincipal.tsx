"use client";

import { IconSend, IconTrash } from "@tabler/icons-react";
import Logo from "./Logo";
import { useState } from "react";

export default function MenuPrincipal() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [nome, setNome] = useState<string>("");
  function addTask() {
    if (nome) {
      setTasks([...tasks, nome]);
      setNome("");
    }
  }

  function deleteTask(i: number) {
    setTasks(tasks.filter((_, index) => index != i));
  }

  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <Logo />
      <h1 className="font-bold text-3xl my-12">Defina sua tarefas de hoje</h1>
      <div className="flex flex-row w-full justify-center">
        <input
          type="text"
          name="task"
          id="task"
          value={nome}
          placeholder="Uma tarefa de hoje (ex. Ir à academia)"
          className="w-1/2 bg-zinc-800 rounded-lg text-zinc-300 p-2"
          onChange={(e) => {
            setNome(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button
          className="bg-zinc-800 text-slate-100 w-fit p-2 rounded-lg mx-4"
          onClick={addTask}
        >
          <IconSend />
        </button>
      </div>
      <div className="w-1/2">
        <ul className="my-8">
          {tasks.map((task, i) => (
            <li
              key={i}
              className="bg-neutral-900 flex-grow w-full p-3 my-4 rounded-xl flex flex-row justify-between"
            >
              {task}
              <span>
                <IconTrash color="#FF7276" onClick={() => deleteTask(i)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
