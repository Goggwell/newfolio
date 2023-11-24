"use client";

import {
  MouseEventHandler,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from "react";

import Draggable from "react-draggable";

import { cn } from "@/lib/utils/cn";

export interface IProgram {
  name: string;
  children?: ReactNode | JSX.Element;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

export const Program = ({ name, children, onClose }: IProgram) => {
  // key identifier for test purposes (since we can't read element pos)
  const [dragKey, setDragKey] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const programRef = useRef<HTMLElement>(null);

  const handleDrag = () => setDragKey(true);
  const handleMinimize = () => setMinimized(!minimized);
  const handleMouseDown = () => {
    const programs = document.querySelectorAll<HTMLElement>(".react-draggable");
    // focus on program currently interacting with
    if (programRef.current) {
      programs.forEach((program) => {
        program.style.zIndex = "0";
      });
      programRef.current.style.zIndex = "1";
    }
  };

  useEffect(() => {
    console.log(minimized);
  }, [minimized]);

  return (
    <Draggable
      handle=".toolbar"
      onDrag={handleDrag}
      onMouseDown={handleMouseDown}
      bounds="parent"
      cancel=".close, .minimize"
    >
      <aside
        ref={programRef}
        className={cn(
          `w-full h-full max-w-[400px] md:max-w-[900px] max-h-[400px] md:max-h-[500px] absolute top-0 left-0 md:top-1/4 md:left-1/4 border-4 border-solid border-programOutline bg-program overflow-hidden transition-[max-height]`,
          dragKey && "dragged",
          minimized && "!max-h-[48px]"
        )}
      >
        <menu
          className={cn(
            "toolbar",
            "m-0 p-0 bg-programOutline relative w-full flex items-center justify-between"
          )}
        >
          <li
            className={cn(
              "minimize",
              "relative list-none w-[41px] h-[41px] grid place-items-center"
            )}
          >
            <button
              className="m-0 p-0 w-full h-full border-none bg-transparent text-themeTitle hover:bg-backgroundRGB"
              onClick={handleMinimize}
            >
              _
            </button>
          </li>
          <li className="list-none text-themeTitle lowercase text-center pointer-events-none p-2.5 text-xl font-semibold tracking-tight">
            {name}
          </li>
          <li
            className={cn(
              "minimize",
              "relative list-none w-[41px] h-[41px] grid place-items-center"
            )}
          >
            <button
              className="m-0 p-0 w-full h-full border-none bg-transparent text-themeTitle hover:bg-backgroundRGB"
              onClick={onClose}
            >
              x
            </button>
          </li>
        </menu>
        <dialog className="block border-none outline-none bg-background text-text w-[calc(100%-20px)] h-[calc(100%-47px] overflow-hidden p-2.5 rounded-b-lg">
          {children}
        </dialog>
      </aside>
    </Draggable>
  );
};
