import * as s from "./style";
import THeaderProps from "./type";

export const Header = ({ title }: THeaderProps) => {
  return (
    <s.Headers>
      <s.Title>{title}</s.Title>
    </s.Headers>
  );
};
