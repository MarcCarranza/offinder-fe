// Dependencies
import { MouseEventHandler, ReactElement } from "react";
import Image from "next/image";

// Style
import style from "./Button.module.css";

// Types
type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
  img?: {
    src: string;
    altText: string;
  };
};

export function Button({ text, onClick, img }: Props): ReactElement {
  return (
    <button className={style.button} onClick={onClick}>
      <span>{img && <Image src={img.src} alt={img.altText} />}</span>
      <span>{text}</span>
    </button>
  );
}
