import { Education as EducationItem } from "../types/sections";
import Section from "./Layout/Section";
import SpreadRow from "./Layout/SpreadRow";
import Text from "./Textual/Text";

const Education = ({ education }: { education: EducationItem[] }) => (
  <Section headerName="Education">
    {education
      .filter((x) => !x.disabled)
      .map((edu, i) => {
        const hasCourse = !!edu?.course;
        const hasProgram = !!edu?.program;
        const hasGrade = !!edu?.grade;

        return (
          <div key={i}>
            <SpreadRow>
              {edu?.institution && (
                <h3 className="text-base font-bold leading-4">
                  <a href={edu?.institution.href}>{edu?.institution.name}</a>
                </h3>
              )}
              {edu?.year && (
                <Text bold italic>
                  {edu?.year}
                </Text>
              )}
            </SpreadRow>

            <SpreadRow className="gap-2">
              {hasCourse && (
                <Text className="flex-1 text-left">{edu.course}</Text>
              )}

              {hasProgram && (
                <Text
                  italic
                  className={`flex-1 ${
                    hasGrade ? "text-center" : "text-right"
                  }`}
                >
                  {edu.program}
                </Text>
              )}

              {hasGrade && (
                <Text italic className="flex-1 text-right">
                  {edu.grade}
                </Text>
              )}
            </SpreadRow>

            {edu.additionalInfo && (
              <div className="text-xxs">{edu.additionalInfo}</div>
            )}
          </div>
        );
      })}
  </Section>
);

export default Education;
