import { IconPointFilled } from "@tabler/icons-react";
import { PersonalInformation as PersonalInformationItem } from "../types/sections";
import Text from "./Textual/Text";

const Separator = () => <IconPointFilled stroke={2} size={16} />;

const PersonalInformation = ({
  personalInformation,
  role,
}: {
  personalInformation: PersonalInformationItem;
  role?: string;
}) => (
  <>
    <h1 className="text-2xl uppercase font-serif font-semibold">
      {personalInformation.name}
    </h1>
    {role && <Text italic>{role}</Text>}
    {personalInformation.address && (
      <Text bold>
        <a href={personalInformation.address?.href}>
          {personalInformation.address?.name}
        </a>
      </Text>
    )}
    <div className="flex flex-wrap items-center justify-center gap-1">
      {personalInformation.email && (
        <Text className="flex items-center gap-1">
          <a href={`mailto:${personalInformation.email}`}>
            {personalInformation.email}
          </a>
        </Text>
      )}
      {personalInformation.githubUsername && (
        <div className="flex items-center gap-1">
          <Separator />
          <Text>
            <a
              href={`https://github.com/${personalInformation.githubUsername}`}
            >
              github.com/{personalInformation.githubUsername}
            </a>
          </Text>
        </div>
      )}
      {personalInformation.linkedin && (
        <div className="flex items-center gap-1">
          <Separator />
          <Text>
            <a href={`https://${personalInformation.linkedin}`}>
              {personalInformation.linkedin}
            </a>
          </Text>
        </div>
      )}
      {personalInformation.website && (
        <div className="flex items-center gap-1">
          <Separator />
          <Text>
            <a href={`https://${personalInformation.website}`}>
              {personalInformation.website}
            </a>
          </Text>
        </div>
      )}
    </div>
  </>
);

export default PersonalInformation;
