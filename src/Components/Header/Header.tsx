import { ReactElement } from "react";

type Props = {
  text: string;
};

export default function Header({ text }: Props): ReactElement {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}
