import { twMerge } from "tailwind-merge";
import { BasicProps } from "../types/props";

const SpreadRow = ({ children, className, style }: BasicProps) => (
  <div
    style={style}
    className={twMerge("flex flex-row justify-between items-center", className)}
  >
    {children}
  </div>
);

export default SpreadRow;
