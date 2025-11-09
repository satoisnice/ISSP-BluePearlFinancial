import type { Script, ProspectingChallengeProps } from "@/types/types";

export const scripts: Script[] = [
  { title: "First Contact", subtitle: "Introduction & qualification" },
  { title: "Follow-up", subtitle: "Rate discussion & next steps" },
  { title: "Objection Handling", subtitle: "Rate shopping responses" },
];

export const challenge: ProspectingChallengeProps = {
  challengeTitle: "Today's Challenge",
  challengeNote: "Complete 100 docusigns",
  challengeProgress: 33,
};
