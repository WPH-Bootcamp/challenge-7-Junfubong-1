import type { FAQItem } from "../types";

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    isOpen: true
  },
  {
    id: 2,
    question: "How do I know if this is right for my business?",
    answer: "We offer a free initial consultation to assess your goals, challenges, and needs, then recommend the best solution tailored specifically to your business size and industry.",
    isOpen: false
  },
  {
    id: 3,
    question: "How much does a project cost?",
    answer: "Project costs vary based on complexity, features, timeline, and requirements. We provide transparent, detailed quotes after understanding your scope, with flexible pricing models available.",
    isOpen: false
  },
  {
    id: 4,
    question: "How long does it take?",
    answer: "Timelines depend on project size and complexity. Small projects may take 2–4 weeks, while larger solutions typically range from 2–6 months. We share a clear schedule before starting work.",
    isOpen: false
  },
  {
    id: 5,
    question: "Can I start with a small project first?",
    answer: "Absolutely! We encourage starting small to build trust and test our collaboration. We can scale up the solution later as your business grows.",
    isOpen: false
  }
];
