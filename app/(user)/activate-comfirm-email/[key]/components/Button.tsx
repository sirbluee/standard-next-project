import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
  classname?: string;
};
import style from './style.module.css'

export default function Button({ title, classname, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${style.container} ${classname}`}>
     {title}
    </button>
  );
}
