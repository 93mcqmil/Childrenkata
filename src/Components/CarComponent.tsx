import { useState } from "react";

type Car = {
  id: number;
  description: string;
  model: string;
  complete: boolean;
};

const CarComponent = () => {
  const CarLists: Car[] = [
    {
      id: 1,
      complete: true,
      description: "Smooth design, sporty feel.",
      model: "Toyota Camry",
    },
    {
      id: 2,
      complete: true,
      description: "Tough, reliable, spacious.",
      model: "Jeep Wrangler",
    },
    {
      id: 3,
      complete: true,
      description: "Eco-friendly, fuel-efficient.",
      model: "Toyota Prius",
    },
  ];

  const [Cars, setCar] = useState(CarLists);

  return (
    <div>
      <h2>CarLists</h2>
      <ul>
        {Cars.map((c: Car) => (
          <li key={c.id}>
            {c.complete ? (
              <span
                onClick={() => {
                  setCar((prevCars) =>
                    prevCars.map((car) => {
                      if (car.id === c.id) {
                        return { ...c, complete: !c.complete }; // Uppdaterar complete-värdet till det motsatta av nuvarande värde
                      } else {
                        return car;
                      }
                    })
                  );
                }}
              >
                {c.complete ? "✅" : "❌"}{" "}
                {/* Visar olika ikon beroende på complete-värdet */}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarComponent;
