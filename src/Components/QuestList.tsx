import { useState } from "react";

type Quest = {
  id: number;
  complete: boolean;
  description: string;
};

const QuestList = () => {
  const StartQuests: Quest[] = [
    {
      id: 1,
      complete: false,
      description: "Slay the king",
    },
    {
      id: 2,
      complete: false,
      description: "Collect 10 pink flowers from the meadow",
    },
    {
      id: 3,
      complete: false,
      description: "Build a castle",
    },
  ];
  const [quests, setQuests] = useState(StartQuests);

  return (
    <div>
      <h1>StartQuest</h1>
      <ul>
        {quests.map((q: Quest) => {
          return <li key={q.id}>{q.description}</li>;
        })}
      </ul>
    </div>
  );
};
export default QuestList;
