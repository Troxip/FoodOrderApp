import { useEffect } from "react";
import { useState } from "react";
import Mealitem from "./Mealitem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      console.log(meals);

      if (!response.ok) {
        console.log("bad");
      }

      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
