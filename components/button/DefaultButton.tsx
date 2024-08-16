import React from "react";

type Props = {
  title: string;
  classname: string;
  onClick: () => void;
};

export default function DefaultButton({title, classname, onClick}: Props) {
  return <div>DefaultButton</div>;
}
