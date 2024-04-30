type Option = {
  id: string;
  title: string;
  nextId?: string;
};

type QuestionMeta = {
  id: string;
  mode: "light" | "dark";
  title: string;
  description?: string;
  options: Option[];
  steps: {
    prevId?: string;
    nextId?: string;
  };
};

type Quiz = QuestionMeta[];

const QUIZ: Quiz = [
  {
    id: "1",
    mode: "light",
    title: "Select your gender:",
    options: [
      { id: "1", title: "Female " },
      { id: "2", title: "Male" },
    ],
    steps: { nextId: "2" },
  },
  {
    id: "2",
    mode: "light",
    title:
      "So we can get to know you better, tell us about your relationship status.",
    options: [
      { id: "1", title: "Single", nextId: "3" },
      { id: "2", title: "In a relationship", nextId: "4" },
    ],
    steps: { prevId: "1" },
  },
  {
    id: "3",
    mode: "light",
    title: "Are you a single parent?",
    options: [
      { id: "1", title: "Yes" },
      { id: "2", title: "No" },
    ],
    steps: { prevId: "2", nextId: "5" },
  },
  {
    id: "5",
    mode: "light",
    title:
      "{gender} {children} need a slightly different approach to improve their relationship. Which statement best describes you?",
    options: [
      {
        id: "1",
        title: "I’m very unhappy with how things are going in my relationship",
      },
      {
        id: "2",
        title:
          "I’m unhappy with parts of my relationship, but some things are working well",
      },
      { id: "", title: "I’m generally happy in my relationship" },
    ],
    steps: { prevId: "3", nextId: "7" },
  },
  {
    id: "7",
    mode: "light",
    title: "Do you tend to overthink?",
    options: [
      {
        id: "1",
        title: "Yes",
      },
      {
        id: "2",
        title: "No",
      },
    ],
    steps: { prevId: "5", nextId: "9" },
  },
  {
    id: "9",
    mode: "dark",
    title: "So how does it work?",
    description:
      "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
    options: [
      {
        id: "1",
        title: "Next",
      },
    ],
    steps: { prevId: "7", nextId: "11" },
  },
  {
    id: "11",
    mode: "light",
    title: "What is most important to you?",
    options: [
      {
        id: "1",
        title: "Success",
      },
      {
        id: "2",
        title: "Romance",
      },
      {
        id: "3",
        title: "Stability",
      },
      {
        id: "4",
        title: "Freedom",
      },
    ],
    steps: { prevId: "7", nextId: "15" },
  },
  {
    id: "12",
    mode: "light",
    title: "Is emotional control tricky for you?",
    options: [
      {
        id: "1",
        title: "Yes",
      },
      {
        id: "2",
        title: "Sometimes",
      },
      {
        id: "3",
        title: "Rarely",
      },
      {
        id: "4",
        title: "Not at all",
      },
    ],
    steps: { prevId: "7", nextId: "15" },
  },
  {
    id: "4",
    mode: "light",
    title: "Are you a parent?",
    options: [
      {
        id: "1",
        title: "Yes",
      },
      {
        id: "2",
        title: "No",
      },
    ],
    steps: { prevId: "2", nextId: "6" },
  },
  {
    id: "6",
    mode: "light",
    title:
      "Single {gender} {children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
    options: [
      {
        id: "1",
        title: "I was unhappy with low things were going in my relationship",
      },
      {
        id: "2",
        title:
          "I was unhappy with parts of my relationship, but some thing were working",
      },
      {
        id: "3",
        title: "I was generally happy with my relationship",
      },
      {
        id: "4",
        title: "I’ve never been in a relationship",
      },
    ],
    steps: { prevId: "4", nextId: "8" },
  },
  {
    id: "8",
    mode: "light",
    title: "Is your partner an introvert or extrovert?",
    options: [
      {
        id: "1",
        title: "Introvert",
      },
      {
        id: "2",
        title: "Extrovert",
      },
      {
        id: "3",
        title: "A bit of both",
      },
    ],
    steps: { prevId: "6", nextId: "10" },
  },
  {
    id: "10",
    mode: "light",
    title: "What is your partner’s gender?",
    options: [
      {
        id: "1",
        title: "Male",
      },
      {
        id: "2",
        title: "Female",
      },
      {
        id: "3",
        title: "A bit of both",
      },
    ],
    steps: { prevId: "8", nextId: "13" },
  },
  {
    id: "13",
    mode: "light",
    title: "Do you agree with the statement below?",
    description: "My partner and I make sex a priority in our relationship",
    options: [
      {
        id: "1",
        title: "Strongly agree",
      },
      {
        id: "2",
        title: "Agree",
      },
      {
        id: "3",
        title: "Neutral",
      },
      { id: "4", title: "Disagee" },
      { id: "5", title: "Strongly disagree" },
    ],
    steps: { prevId: "10", nextId: "14" },
  },
  {
    id: "14",
    mode: "light",
    title: "When you think about your relationship goals, you feel...?",
    options: [
      {
        id: "1",
        title: "Optimistic! They are totally doable, with some guidance.",
      },
      {
        id: "2",
        title: "Cautious. I’ve struggled before, but I’m hopeful.",
      },
      {
        id: "3",
        title: "I’m feeling a little anxious, honestly.",
      },
    ],
    steps: { prevId: "13", nextId: "15" },
  },
  {
    id: "15",
    mode: "light",
    title: "Where did you hear about us?",

    options: [
      {
        id: "1",
        title: "Poster or Billboard",
      },
      {
        id: "2",
        title: "Friend or Family",
      },
      {
        id: "3",
        title: "Instagram",
      },
      {
        id: "4",
        title: "Direct Mail or Package Insert",
      },
      {
        id: "5",
        title: "Online TV or Streaming TV",
      },
      {
        id: "6",
        title: "TV",
      },
      {
        id: "7",
        title: "Radio",
      },
      {
        id: "8",
        title: "Search Engine (Google, Bing, etc.)",
      },
      {
        id: "9",
        title: "Newspaper or Magazine",
      },
      {
        id: "10",
        title: "Facebook",
      },
      {
        id: "11",
        title: "Blog Post or Website Review",
      },
      {
        id: "12",
        title: "Podcast",
      },
      {
        id: "13",
        title: "Influencer",
      },
      {
        id: "",
        title: "Youtube",
      },
      {
        id: "14",
        title: "Pinterest",
      },
      {
        id: "15",
        title: "Other",
      },
    ],
    steps: { prevId: "13" },
  },
];

export { QUIZ };
export type { QuestionMeta, Option };
