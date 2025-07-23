import Section from "./Layout/Section";
import Text from "./Textual/Text";
import SpreadRow from "./Layout/SpreadRow";
import { CustomData as CustomDataItem } from "../types/sections";

type ProjectProps = {
  data: CustomDataItem;
};

const CustomData = ({ data }: ProjectProps) => {
  return (
    <Section
      highlighted={!!data.highlighted}
      headerName={data.name}
      className="gap-3"
    >
      {data.items
        .filter((x) => !x.disabled)
        .map((item, i) => (
          <div key={i}>
            <SpreadRow>
              <Text>
                <a className="font-bold underline" href={item.href}>
                  {item.title.name}
                </a>{" "}
                <span className="italic text-xxs">{item.title.extraNote}</span>
              </Text>
              <Text italic bold>
                {item.title.date}
              </Text>
            </SpreadRow>

            {typeof item.description === "string" ? (
              <Text dangerouslySetInnerHTML={{ __html: item.description }} />
            ) : (
              item.description.map((x, i) => (
                <Text key={i} dangerouslySetInnerHTML={{ __html: x }} />
              ))
            )}
            {item?.technologies && (
              <div className="leading-4">
                <span className="text-xxs font-bold">Technologies: </span>
                <span className="text-xxs italic">
                  {item?.technologies.join(", ")}
                </span>
              </div>
            )}
          </div>
        ))}
    </Section>
  );
};

export default CustomData;
