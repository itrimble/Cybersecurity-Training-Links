/**
 * Career Quiz Data
 * Quiz questions for determining best career path match
 */

export interface QuizOption {
  text: string;
  careers: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What type of work environment appeals to you most?',
    options: [
      { text: 'Fast-paced, responding to active threats and incidents', careers: ['security-analyst', 'incident-responder'] },
      { text: 'Methodical, finding vulnerabilities before attackers do', careers: ['penetration-tester', 'red-team', 'appsec-engineer'] },
      { text: 'Strategic, designing systems and policies', careers: ['security-architect', 'grc-analyst', 'ciso'] },
      { text: 'Research-focused, analyzing malware and threats', careers: ['malware-analyst', 'threat-intel'] }
    ]
  },
  {
    id: 2,
    question: 'How do you prefer to solve problems?',
    options: [
      { text: 'Breaking things apart to understand how they work', careers: ['penetration-tester', 'red-team', 'malware-analyst'] },
      { text: 'Building and implementing secure solutions', careers: ['security-engineer', 'cloud-security', 'appsec-engineer'] },
      { text: 'Investigating and piecing together clues', careers: ['security-analyst', 'incident-responder', 'threat-intel'] },
      { text: 'Creating frameworks and processes', careers: ['grc-analyst', 'security-architect', 'ciso'] }
    ]
  },
  {
    id: 3,
    question: 'What aspect of security interests you most?',
    options: [
      { text: 'Offensive security - hacking and exploitation', careers: ['penetration-tester', 'red-team'] },
      { text: 'Defensive security - protecting and monitoring', careers: ['security-analyst', 'security-engineer', 'incident-responder'] },
      { text: 'Cloud and application security', careers: ['cloud-security', 'appsec-engineer'] },
      { text: 'Governance, compliance, and risk management', careers: ['grc-analyst', 'security-architect', 'ciso'] }
    ]
  },
  {
    id: 4,
    question: 'How technical do you want your role to be?',
    options: [
      { text: 'Extremely technical - coding, reverse engineering, exploits', careers: ['malware-analyst', 'red-team', 'appsec-engineer'] },
      { text: 'Technical - hands-on with tools and systems', careers: ['penetration-tester', 'security-engineer', 'incident-responder', 'cloud-security'] },
      { text: 'Mix of technical and business/policy', careers: ['security-analyst', 'security-architect', 'threat-intel'] },
      { text: 'More strategic and management-focused', careers: ['grc-analyst', 'ciso'] }
    ]
  },
  {
    id: 5,
    question: 'What are your long-term career goals?',
    options: [
      { text: 'Become a top technical expert in my field', careers: ['red-team', 'malware-analyst', 'appsec-engineer'] },
      { text: 'Lead a security team or department', careers: ['ciso', 'security-architect'] },
      { text: 'Balance technical work with career growth', careers: ['security-engineer', 'penetration-tester', 'cloud-security'] },
      { text: 'Work in consulting or advisory roles', careers: ['grc-analyst', 'security-architect', 'incident-responder'] }
    ]
  }
];

export function calculateQuizResults(answers: number[]): { careerId: string; score: number }[] {
  const careerScores: Record<string, number> = {};

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex >= 0 && answerIndex < quizQuestions[questionIndex].options.length) {
      const selectedOption = quizQuestions[questionIndex].options[answerIndex];
      selectedOption.careers.forEach((careerId) => {
        careerScores[careerId] = (careerScores[careerId] || 0) + 1;
      });
    }
  });

  return Object.entries(careerScores)
    .map(([careerId, score]) => ({ careerId, score }))
    .sort((a, b) => b.score - a.score);
}
