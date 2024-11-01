"use client";

import { IconSend, IconTrash } from "@tabler/icons-react";
import Logo from "./Logo";
import { useState } from "react";
import TasksComplete from "./TasksComplete";

export default function MenuPrincipal() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [nome, setNome] = useState<string>("");
  const [complete, setComplete] = useState<string[]>([]);
  function addTask() {
    if (nome) {
      setTasks([...tasks, nome]);
      setNome("");
    }
  }

  function completeTask(i: number) {
    setComplete([...complete, tasks[i]]);
    setTasks(tasks.filter((_, index) => index != i));
  }

  function deleteTask(i: number) {
    setTasks(tasks.filter((_, index) => index != i));
  }

  return (
    <main className="flex justify-center items-center flex-col flex-grow min-h-full bg-black">
      <Logo />
      <h1 className="font-bold text-3xl my-12">Define your tasks for today.</h1>
      <div className="flex flex-row w-full justify-center">
        <input
          type="text"
          name="task"
          id="task"
          value={nome}
          placeholder="A task for today (e.g. going to the gym)"
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
              className="bg-neutral-900 flex-grow w-full p-3 my-4 rounded-xl flex flex-row justify-between items-center text-white"
            >
              <div className="flex items-center w-full max-w-1/2">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-neutral-700 checked:before:bg-neutral-700 hover:before:opacity-10"
                    id={task}
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        completeTask(i);
                        e.target.checked = false;
                      }
                    }}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="flex w-full flex-wrap max-w-1/2 break-all"
                  htmlFor={task}
                >
                  {task}
                </label>
              </div>
              <span>
                <IconTrash color="#FF7276" onClick={() => deleteTask(i)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      {complete.length >= 1 && (
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-neutral-400 my-12">
            Tasks completed
          </h1>
          <div className="w-1/2">
            <TasksComplete
              completed={complete}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        </div>
      )}
    </main>
  );
}
