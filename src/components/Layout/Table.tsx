import { twMerge } from "tailwind-merge";
import { BasicProps, TextualProps } from "../types/props";
import { ComponentProps } from "react";

const composeTextClass = (
  { className, italic, bold, underline, nowrap }: TextualProps & BasicProps,
  extra?: string,
) =>
  twMerge(
    className,
    "leading-4 text-sm",
    italic && "italic",
    bold && "font-bold",
    underline && "underline",
    nowrap && "whitespace-nowrap",
    extra,
  );

type CellProps = ComponentProps<"td"> & TextualProps & BasicProps;

const Td = ({ italic, bold, underline, nowrap, ...rest }: CellProps) => (
  <td
    {...rest}
    className={composeTextClass(
      { italic, bold, underline, nowrap },
      "align-top text-xs",
    )}
  />
);

const Th = ({
  italic,
  bold,
  underline,
  nowrap,
  ...rest
}: ComponentProps<"th"> & TextualProps & BasicProps) => (
  <th
    {...rest}
    className={composeTextClass(
      { italic, bold, underline, nowrap },
      "text-left align-bottom text-xs",
    )}
  />
);

const Body = (props: ComponentProps<"tbody">) => <tbody {...props} />;

const Foot = (props: ComponentProps<"tfoot">) => <tfoot {...props} />;

const Head = (props: ComponentProps<"thead">) => <thead {...props} />;

const Tr = (props: ComponentProps<"tr">) => <tr {...props} />;

type TableProps = ComponentProps<"table"> & BasicProps;

type TableComponent = React.FC<TableProps> & {
  Th: typeof Th;
  Td: typeof Td;
  Tr: typeof Tr;
  Body: typeof Body;
  Head: typeof Head;
  Foot: typeof Foot;
};

const Table: TableComponent = (props) => <table {...props} />;

Table.Th = Th;
Table.Td = Td;
Table.Tr = Tr;
Table.Body = Body;
Table.Head = Head;
Table.Foot = Foot;

export { Table };
