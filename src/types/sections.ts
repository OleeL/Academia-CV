export interface Link {
  href?: string;
  name: string;
}

export interface Overview {
  description: string;
  disabled?: boolean;
}

export interface Skills {
  disabled?: boolean;
  [category: string]:
    | Partial<Record<SkillProficiency, string[]>>
    | boolean
    | undefined;
}

export type SkillProficiency = string;

export interface PersonalInformation {
  name: string;
  address?: Link;
  email?: string;
  githubUsername?: string | null;
  website?: string | null;
  linkedin?: string;
}

export interface Summary {
  description: string;
  disabled?: boolean;
}

export interface Education {
  disabled?: boolean;
  institution: Link;
  program?: string;
  course?: string;
  grade?: string;
  year?: string;
  additionalInfo?: string;
}

export interface Experience {
  company: {
    name: string;
    href?: string;
    extraNote?: string;
  };
  location: {
    name: string;
    href?: string;
  };
  role?: string;
  start_date?: string;
  end_date?: string;
  points?: string[];
  name?: string;
  disabled?: boolean;
}

export interface Achievement {
  name: string;
  result?: string;
  type?: string;
  disabled?: boolean;
  href?: string;
}

export interface CustomDataItem {
  title: {
    name: string;
    extraNote?: string;
    date?: string;
  };
  href?: string;
  description: string | string[];
  technologies?: string[];
  disabled?: boolean;
}

export interface CustomData {
  name: string;
  highlighted?: boolean;
  disabled?: boolean;
  items: CustomDataItem[];
}

export interface CVDocument {
  documentName: string;
  role: string;
  personalInformation: PersonalInformation;
  overview?: Overview | null;
  summary?: Summary;
  education?: Education[];
  experience?: Experience[];
  achievements?: Achievement[];
  skills?: Skills;

  custom?: CustomData[];
}
