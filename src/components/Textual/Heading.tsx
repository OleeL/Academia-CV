import { twMerge } from "tailwind-merge";
import { BasicProps } from "../types/props";

const Heading = {
  Three: ({ children, className, style }: BasicProps) => (
    <h3
      style={style}
      className={twMerge("text-base font-bold leading-4 mt-2", className)}
    >
      {children}
    </h3>
  ),
};

export default Heading;
