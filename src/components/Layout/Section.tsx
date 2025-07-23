import { PropsWithChildren } from "react";
import Separator from "./Separator";
import { BasicProps } from "../types/props";
import { twMerge } from "tailwind-merge";

const Section = ({
  children,
  headerName,
  omitSeparator,
  className,
  style,
  highlighted,
}: PropsWithChildren<{
  headerName?: string;
  omitSeparator?: boolean;
  highlighted?: boolean;
}> &
  BasicProps) => {
  return (
    <section
      className={twMerge(
        "px-3 pb-3",
        highlighted && "border-3 border-red-500 rounded-xl",
      )}
    >
      <h2 className="text-xl text-primary font-semibold uppercase">
        {headerName}
      </h2>
      {!omitSeparator && <Separator />}
      <div
        className={twMerge("mx-5 pt-2 flex flex-col gap-3", className)}
        style={style}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
