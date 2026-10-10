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


export type ExamCardTone = "purple" | "blue" | "pink" | "lavender";

export type FeaturedExam = {
  code: "CGL" | "CH" | "MTS" | "GD";
  name: string;
  fullName: string;
  stages?: string;
  mocks: string;
  pyqs: string;
  tone: ExamCardTone;
  popular?: boolean;
};

export const featuredExams: FeaturedExam[] = [
  {
    code: "CGL",
    name: "SSC CGL",
    fullName: "Combined Graduate Level",
    stages: "Tier 1 · Tier 2",
    mocks: "50+ Mocks",
    pyqs: "120+ PYQs",
    tone: "purple",
    popular: true,
  },
  {
    code: "CH",
    name: "SSC CHSL",
    fullName: "Combined Higher Secondary Level",
    stages: "Tier 1 · Tier 2",
    mocks: "42+ Mocks",
    pyqs: "90+ PYQs",
    tone: "blue",
  },
  {
    code: "MTS",
    name: "SSC MTS",
    fullName: "Multi-Tasking Staff",
    mocks: "38+ Mocks",
    pyqs: "70+ PYQs",
    tone: "pink",
  },
  {
    code: "GD",
    name: "SSC GD",
    fullName: "General Duty Constable",
    mocks: "35+ Mocks",
    pyqs: "60+ PYQs",
    tone: "lavender",
  },
];

export type PopularTestTone = "purple" | "blue" | "pink" | "lavender";

export type PopularTest = {
  id: string;
  title: string;
  status: "Free" | "Premium";
  attempts: string;
  questions: string;
  marks: string;
  duration: string;
  languages: string;
  actionLabel: string;
  tone: PopularTestTone;
};

export const popularTests: PopularTest[] = [
  {
    id: "cgl-tier-1-mock-01",
    title: "SSC CGL Tier 1 — Full Mock 01",
    status: "Free",
    attempts: "24.5K attempts",
    questions: "100 Ques",
    marks: "200 Marks",
    duration: "60 Mins",
    languages: "EN / HI",
    actionLabel: "Start Test",
    tone: "purple",
  },
  {
    id: "chsl-tier-1-mock-05",
    title: "SSC CHSL Tier 1 — Mock 05",
    status: "Premium",
    attempts: "18.2K attempts",
    questions: "100 Ques",
    marks: "200 Marks",
    duration: "60 Mins",
    languages: "EN / HI",
    actionLabel: "Start Test",
    tone: "blue",
  },
  {
    id: "mts-full-mock-03",
    title: "SSC MTS — Full Mock 03",
    status: "Premium",
    attempts: "15.7K attempts",
    questions: "90 Ques",
    marks: "180 Marks",
    duration: "45 Mins",
    languages: "EN / HI",
    actionLabel: "Start Test",
    tone: "pink",
  },
  {
    id: "cgl-2025-pyq-shift-2",
    title: "SSC CGL 2025 PYQ — Shift 2",
    status: "Free",
    attempts: "31.0K attempts",
    questions: "100 Ques",
    marks: "200 Marks",
    duration: "60 Mins",
    languages: "EN / HI",
    actionLabel: "Practice Paper",
    tone: "lavender",
  },
];
