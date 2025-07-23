import { Experience as ExpierenceItem } from "../types/sections";
import Section from "./Layout/Section";
import SpreadRow from "./Layout/SpreadRow";
import Text from "./Textual/Text";

const Experience = ({ experience }: { experience: ExpierenceItem[] }) => {
  return (
    <Section headerName="Experience">
      {experience
        .filter((x) => !x.disabled)
        .map((exp, i) => (
          <div key={i}>
            <SpreadRow>
              <h3 className="text-base font-bold leading-4">{exp.role}</h3>
              <Text bold italic nowrap>
                {exp.start_date} — {exp.end_date || "Present"}
              </Text>
            </SpreadRow>
            <SpreadRow>
              <Text italic>
                <a href={exp.company.href}>
                  <span className="underline">{exp.company.name}</span>{" "}
                  {exp.company?.extraNote && (
                    <span className="text-xxs">{exp.company.extraNote}</span>
                  )}
                </a>
              </Text>
              <Text underline italic className="flex flex-row">
                <a href={exp.location?.href}>{exp.location.name}</a>
              </Text>
            </SpreadRow>
            {!!exp?.points?.length && (
              <ul className="mt-2 list-disc list-inside flex flex-col gap-2 text-sm">
                {exp?.points.map((point, j) => (
                  <li className="leading-4 list-none" key={j}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </Section>
  );
};

export default Experience;
