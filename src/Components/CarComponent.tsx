import { useState } from "react";

type Car = {
  id: number;
  description: string;
  model: string;
};

const CarComponent = () => {
  const CarLists: Car[] = [
    {
      id: 1,
      description: "Smooth design, sporty feel.",
      model: "Toyota Camry",
    },
    {
      id: 2,
      description: "Tough, reliable, spacious.",
      model: "Jeep Wrangler",
    },
    {
      id: 3,
      description: "Eco-friendly, fuel-efficient.",
      model: "Toyota Prius",
    },
  ];

  const [Cars, setCar] = useState(CarLists);

  return (
    <div>
      <h2>CarLists</h2>
      <ul>
        {Cars.map((c: Car) => {
          return (
            <li key={c.id}>
              {c.model}, {c.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CarComponent;
