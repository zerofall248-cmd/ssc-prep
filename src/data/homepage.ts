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

export const practiceSets = [
  { title: "Reasoning warm-up", text: "Start with a short set of logic and pattern-based questions.", tag: "Reasoning", number: "01" },
  { title: "Arithmetic basics", text: "Build confidence with core quantitative aptitude topics.", tag: "Quantitative Aptitude", number: "02" },
  { title: "English essentials", text: "Revisit grammar and vocabulary with focused revision.", tag: "English Language", number: "03" },
];
