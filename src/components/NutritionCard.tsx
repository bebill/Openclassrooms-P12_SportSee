import { iUser } from "../interfaces/users";

export const NutritionCard = ({ userData }: { userData: iUser }) => {
  return (
    <aside className="nutrition_recap">
      <div className="nutrition_item">
        <img
          className="nutrition_img"
          src={`${process.env.PUBLIC_URL}/icon_calories.svg`}
          alt="Calories"
        />
        Calories {userData.keyData.calorieCount}kCal
      </div>
      <div className="nutrition_item">
        <img
          className="nutrition_img"
          src={`${process.env.PUBLIC_URL}/icon_proteins.svg`}
          alt="Protéines"
        />
        Protéines {userData.keyData.proteinCount}g
      </div>
      <div className="nutrition_item">
        <img
          className="nutrition_img"
          src={`${process.env.PUBLIC_URL}/icon_carbs.svg`}
          alt="Glucides"
        />
        Glucides {userData.keyData.carbohydrateCount}g
      </div>
      <div className="nutrition_item">
        <img
          className="nutrition_img"
          src={`${process.env.PUBLIC_URL}/icon_fat.svg`}
          alt="Lipides"
        />
        Lipides {userData.keyData.lipidCount}g
      </div>
    </aside>
  );
};
