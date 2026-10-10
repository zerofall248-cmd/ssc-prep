export type ExamItem = {
  name: string;
  level: string;
  description: string;
  code: string;
};

export const exams: ExamItem[] = [
  { name: "SSC CGL", level: "Graduate level", description: "Prepare for graduate-level Group B and Group C posts.", code: "CGL" },
  { name: "SSC CHSL", level: "12th pass", description: "Practise for clerical and data-entry roles.", code: "CH" },
  { name: "SSC MTS", level: "Matriculation", description: "Build confidence with focused daily practice.", code: "MTS" },
  { name: "SSC GD Constable", level: "Constable recruitment", description: "Revise reasoning, maths, English and general awareness.", code: "GD" },
  { name: "SSC CPO", level: "Sub-Inspector", description: "Organise your practice for SI recruitment exams.", code: "CPO" },
  { name: "SSC JE", level: "Engineering", description: "Keep technical and general preparation in one plan.", code: "JE" },
  { name: "SSC Stenographer", level: "Grade C and D", description: "Explore focused revision and practice resources.", code: "ST" },
  { name: "SSC Selection Post", level: "Post-specific", description: "Find practice that fits your target selection post.", code: "SP" },
];

export type SubjectVisual = "quantitative" | "reasoning" | "english" | "awareness";

export type SubjectItem = {
  id: string;
  name: string;
  text: string;
  practiceTag: string;
  visual: SubjectVisual;
};

export const subjects: SubjectItem[] = [
  {
    id: "quantitative",
    name: "Quantitative Aptitude",
    text: "Arithmetic, algebra, geometry and data interpretation.",
    practiceTag: "Quantitative Aptitude",
    visual: "quantitative",
  },
  {
    id: "reasoning",
    name: "General Intelligence",
    text: "Series, analogy, coding-decoding and logical reasoning.",
    practiceTag: "General Intelligence",
    visual: "reasoning",
  },
  {
    id: "english",
    name: "English Language",
    text: "Grammar, vocabulary, comprehension and usage.",
    practiceTag: "English Language",
    visual: "english",
  },
  {
    id: "awareness",
    name: "General Awareness",
    text: "Static GK, science, history, polity and current affairs.",
    practiceTag: "General Awareness",
    visual: "awareness",
  },
];

export type PracticeItem = {
  number: string;
  title: string;
  text: string;
  tag: string;
  visual: SubjectVisual;
};

export const practiceSets: PracticeItem[] = [
  {
    number: "01",
    title: "Reasoning warm-up",
    text: "Start with a short set of logic and pattern-based questions.",
    tag: "General Intelligence",
    visual: "reasoning",
  },
  {
    number: "02",
    title: "Arithmetic basics",
    text: "Build confidence with core quantitative aptitude topics.",
    tag: "Quantitative Aptitude",
    visual: "quantitative",
  },
  {
    number: "03",
    title: "English essentials",
    text: "Revisit grammar and vocabulary with focused revision.",
    tag: "English Language",
    visual: "english",
  },
];

export const resources = [
  {
    id: "notes",
    title: "Study notes",
    text: "Short revision notes for key concepts.",
    symbol: "notes",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    text: "Word meanings and revision lists.",
    symbol: "vocabulary",
  },
  {
    id: "current-affairs",
    title: "Current affairs",
    text: "A category for current-affairs study material.",
    symbol: "current-affairs",
  },
] as const;
