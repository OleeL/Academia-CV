import { Achievement } from "../types/sections";
import Section from "./Layout/Section";
import SpreadRow from "./Layout/SpreadRow";
import Text from "./Textual/Text";

const Achievements = ({ achievements }: { achievements: Achievement[] }) => {
  return (
    <Section headerName="Achievements" className="gap-3">
      {achievements.map((item, i) => (
        <SpreadRow key={i}>
          <h3 className="text-base font-bold leading-4">
            <a href={item?.href}>{item.name}</a>{" "}
            {item.result && (
              <span className="text-xxs italic">*{item.result}</span>
            )}
          </h3>
          {item.type && <Text italic>{item.type}</Text>}
        </SpreadRow>
      ))}
    </Section>
  );
};

export default Achievements;
