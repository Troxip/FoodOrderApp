import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Mealitem from "./Mealitem";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Mealitem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
