import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
  classname?: string;
};
import style from "./style.module.css";

export default function ButtonComponent({ title, classname, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded px-4 py-2 text-2xl font-semibold text-white bg-blue-700 ${classname}`}
      // className={`${style.container} ${classname}`}
    >
      {title}
    </button>
  );
}
