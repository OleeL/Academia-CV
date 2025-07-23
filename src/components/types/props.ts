import { CSSProperties, PropsWithChildren } from "react";

export type BasicProps = PropsWithChildren & {
  className?: string;
  style?: CSSProperties;
};

export type TextualProps = {
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  nowrap?: boolean;
};
