import Section from "./Layout/Section";
import { useMemo } from "react";
import type { Skills as SkillsSection } from "../types/sections";
import { Table } from "./Layout/Table";

type SkillsProps = { data: SkillsSection };

const Skills = ({ data }: SkillsProps) => {
  const { categories, levels } = useMemo(() => {
    if (!data) return { categories: [], levels: [] };

    const catEntries = Object.entries(data).filter(
      ([, value]) =>
        value &&
        typeof value === "object" &&
        !(value as Record<string, unknown>).disabled,
    ) as [string, Record<string, string[]>][];

    const set = new Set<string>();
    catEntries.forEach(([, lvlMap]) =>
      Object.keys(lvlMap).forEach((lvl) => lvl !== "disabled" && set.add(lvl)),
    );

    const preferred = ["Proficient", "Familiar", "Prior Experience"];
    const levels = [
      ...preferred.filter((p) => set.has(p)),
      ...[...set].filter((l) => !preferred.includes(l)).sort(),
    ];

    return { categories: catEntries, levels };
  }, [data]);

  if (!data || categories.length === 0) return null;

  return (
    <Section headerName="Skills">
      <Table className="w-full">
        <Table.Head>
          <Table.Tr>
            <Table.Th />
            {levels.map((level, i) => (
              <Table.Th key={i}>{level}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Head>

        <Table.Body>
          {categories.map(([category, lvlMap]) => (
            <Table.Tr key={category}>
              <Table.Td bold>{category}</Table.Td>
              {levels.map((level) => (
                <Table.Td italic key={level}>
                  {(lvlMap[level] || []).join(", ") || "—"}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
};

export default Skills;
