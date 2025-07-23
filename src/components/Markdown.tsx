import ReactMarkdown from "react-markdown";
import Text from "./Textual/Text";

const Markdown = ({ children }: { children: string | null }) => (
  <ReactMarkdown
    components={{
      p: (props) => <Text className="text-sm" {...props} />,
      strong: (props) => (
        <Text as="strong" className="text-sm" bold {...props} />
      ),
      em: (props) => <Text as="em" className="text-sm" italic {...props} />,
    }}
  >
    {children?.toString() ?? ""}
  </ReactMarkdown>
);

export default Markdown;
