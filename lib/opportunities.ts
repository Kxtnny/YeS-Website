export type OpportunityType =
  | "Internship"
  | "Full-time"
  | "Part-time"
  | "Project"
  | "Co-founder";

export interface Opportunity {
  id: string;
  companyName: string;
  roleTitle: string;
  location: string;
  type: OpportunityType;
  remote: boolean;
  description: string;
  applyUrl: string;
  companyUrl?: string;
  companyLogo?: string;
  companyId?: string;
  tags?: string[];
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "valsea-ml-intern",
    companyId: "valsea",
    companyName: "VALSEA",
    roleTitle: "Speech / Applied ML Engineer Intern",
    location: "Singapore",
    type: "Internship",
    remote: true,
    description:
      "Help build speech recognition models for Asian accents and code-switching languages like Singlish and Chinglish.",
    applyUrl: "https://www.linkedin.com/jobs/view/4430597472/",
    companyUrl: "https://valsea.ai/",
    tags: ["Machine Learning", "Speech", "Remote-friendly"],
  },
  {
    id: "money-pasar-optimisation-intern",
    companyId: "money-pasar",
    companyName: "Money Pasar",
    roleTitle: "Optimisation Engineer Intern",
    location: "Remote",
    type: "Internship",
    remote: true,
    description:
      "Design and evaluate clearing and optimisation algorithms for Money Pasar's cross-border settlement engine — maximising internal netting while minimising external FX costs.",
    applyUrl:
      "https://moneypasar.com/careers/algorithm-engineer-intern-cross-border-netting-fx-optimisation-engine",
    companyUrl: "https://moneypasar.com/",
    tags: ["Algorithms", "Remote"],
  },
];

export function getOpportunitiesByCompanyId(companyId: string): Opportunity[] {
  return OPPORTUNITIES.filter((opportunity) => opportunity.companyId === companyId);
}

export function companyHasOpportunities(companyId: string): boolean {
  return OPPORTUNITIES.some((opportunity) => opportunity.companyId === companyId);
}
