import Section from "./components/Layout/Section";
import Text from "./components/Textual/Text";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalInformation from "./components/PersonalInformation";
import Achievements from "./components/Achievements";
import CustomData from "./components/CustomData";
import Skills from "./components/Skills";
import TextBlock from "./components/Layout/TextBlock";
import data from "./data.json" assert { type: "json" };
import type { CVDocument } from "./types/sections";

const cvData = data as CVDocument;

const overview = cvData.overview;
const summary = cvData?.summary;
const achievements = cvData?.achievements?.filter((x) => !x.disabled);
const education = cvData?.education?.filter((x) => !x.disabled);
const experience = cvData?.experience;
const skills = cvData?.skills;
const custom = cvData?.custom?.filter((x) => !x.disabled);

const CVTemplate = () => {
  return (
    <main className="font-serif">
      <header className="p-2 flex justify-center items-center flex-col">
        <PersonalInformation
          personalInformation={data.personalInformation}
          role={data.role}
        />
      </header>
      <div>
        {overview && (
          <Section omitSeparator className="text-center italic">
            <Text className="text-xxs">{overview?.description}</Text>
          </Section>
        )}
        {summary && (
          <TextBlock name="Summary" disabled={summary?.disabled}>
            {summary?.description}
          </TextBlock>
        )}
        {skills && !cvData.skills?.disabled && <Skills data={skills} />}
        {experience?.length && <Experience experience={experience} />}
        {education?.length && <Education education={education} />}
        {custom?.map((x, index) => (
          <CustomData key={index} data={x} />
        ))}
        {achievements?.length && <Achievements achievements={achievements} />}
      </div>
    </main>
  );
};

export default CVTemplate;
