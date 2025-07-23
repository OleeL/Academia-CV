import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Section from "./Section";

interface TextBlockProps {
  name: string;
  disabled?: boolean;
  children?: ReactNode;
}

const TextBlock = ({ name, disabled, children }: TextBlockProps) => {
  if (disabled) return <></>;
  return (
    <Section headerName={name} className="text-sm">
      <ReactMarkdown>{children?.toString() ?? ""}</ReactMarkdown>
    </Section>
  );
};

export default TextBlock;
