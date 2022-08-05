import SButton from "./styled";
import TButtonProps from "./tipes";

export const Button = ({ name }: TButtonProps) => <SButton>{name}</SButton>;
export const EventButton = ({ name, handleClick }: TButtonProps) => (
  <SButton onClick={handleClick}>{name}</SButton>
);
