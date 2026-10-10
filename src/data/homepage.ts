export type ExamItem = {
  name: string;
  level: string;
  description: string;
  code: string;
  tone: "lilac" | "yellow" | "mint" | "blue";
};

export const exams: ExamItem[] = [
  { name: "SSC CGL", level: "Graduate level", description: "Prepare for graduate-level Group B and Group C posts.", code: "CGL", tone: "lilac" },
  { name: "SSC CHSL", level: "12th pass", description: "Practise for clerical and data-entry roles.", code: "CH", tone: "yellow" },
  { name: "SSC MTS", level: "Matriculation", description: "Build confidence with focused daily practice.", code: "MTS", tone: "mint" },
  { name: "SSC GD Constable", level: "Constable recruitment", description: "Revise reasoning, maths, English and general awareness.", code: "GD", tone: "blue" },
  { name: "SSC CPO", level: "Sub-Inspector", description: "Organise your practice for SI recruitment exams.", code: "CPO", tone: "mint" },
  { name: "SSC JE", level: "Engineering", description: "Keep technical and general preparation in one plan.", code: "JE", tone: "lilac" },
  { name: "SSC Stenographer", level: "Grade C and D", description: "Explore focused revision and practice resources.", code: "ST", tone: "yellow" },
  { name: "SSC Selection Post", level: "Post-specific", description: "Find practice that fits your target selection post.", code: "SP", tone: "blue" },
];

export const practiceSets = [
  { category: "DAILY PRACTICE", title: "Reasoning warm-up", text: "A short, focused set to get your study session moving.", tag: "Reasoning", tone: "practice-lilac", number: "01" },
  { category: "CONCEPT BUILDER", title: "Arithmetic basics", text: "Strengthen the fundamentals one question at a time.", tag: "Quantitative Aptitude", tone: "practice-yellow", number: "02" },
  { category: "QUICK REVISION", title: "English essentials", text: "Revisit grammar and vocabulary in bite-sized sessions.", tag: "English", tone: "practice-mint", number: "03" },
];

export const subjects = [
  { number: "01", name: "Quantitative Aptitude", text: "Arithmetic, algebra, geometry and data interpretation.", tone: "subject-lilac" },
  { number: "02", name: "General Intelligence", text: "Series, analogy, coding-decoding and logical reasoning.", tone: "subject-yellow" },
  { number: "03", name: "English Language", text: "Grammar, vocabulary, comprehension and usage.", tone: "subject-mint" },
  { number: "04", name: "General Awareness", text: "Static GK, science, history, polity and current affairs.", tone: "subject-blue" },
];

export const resources = [
  { label: "STUDY NOTES", title: "Make revision easier", text: "Keep key concepts and short notes within reach.", symbol: "N" },
  { label: "VOCABULARY", title: "Build your word power", text: "Make vocabulary revision a regular habit.", symbol: "V" },
  { label: "CURRENT AFFAIRS", title: "Stay aware, stay ready", text: "A dedicated space for current-affairs learning.", symbol: "CA" },
];

export const faqs = [
  { question: "What is SSC Prep?", answer: "SSC Prep is an independent preparation portal concept bringing exam discovery, practice sets and revision resources into one focused place." },
  { question: "Are these official SSC question papers?", answer: "No. Listings on this first version are illustrative mock content. A paper will only be described as an official previous-year paper when its source has been checked." },
  { question: "Can I prepare for multiple SSC exams?", answer: "Yes. Explore different exam categories and choose the practice areas that match your preparation goals." },
  { question: "Will my test history be saved?", answer: "Persistent accounts and test history are planned for a later stage. They are not enabled in this mock-data homepage." },
];
