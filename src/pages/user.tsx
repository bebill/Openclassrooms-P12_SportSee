import { useState, useEffect } from "react";
import { fetchUserData } from "../services/fetchData";
import { useNavigate, useParams } from "react-router-dom";
import DailyActivity from "../components/DailyActivity";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import Score from "../components/Score";

export const User = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userMainData = await fetchUserData(Number(id));
        console.log("fetched main data", userMainData);
        if (userMainData) {
          setUser(userMainData);
        } else {
          console.error("Utilisateur non trouvé");
          navigate("/error404");
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données utilisateur:",
          error
        );
        navigate("/error404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!user) {
    return null;
  }

  return (
    <main>
      <section className="layout">
        <div className="dashboard">
          <div className="welcome">
            <div className="hello">
              <h1>Bonjour </h1>
              <h1 className="red">{user.userInfos.firstName}</h1>
            </div>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className="recap">
            <div className="charts">
              <DailyActivity />
              <div className="charts_aligned">
                <AverageSessions />
                <Performance />
                <Score />
              </div>
            </div>
            <aside className="nutrition_recap">
              <div className="nutrition_item">
                <img
                  className="nutrition_img"
                  src={`${process.env.PUBLIC_URL}/icon_calories.svg`}
                  alt="Calories"
                />
                <div className="nutrition_data">
                  <p>{user.keyData.calorieCount}kCal</p>
                  <p className="caption">Calories</p>
                </div>
              </div>
              <div className="nutrition_item">
                <img
                  className="nutrition_img"
                  src={`${process.env.PUBLIC_URL}/icon_proteins.svg`}
                  alt="Protéines"
                />
                <div className="nutrition_data">
                  <p>{user.keyData.proteinCount}g</p>
                  <p className="caption">Protéines</p>
                </div>
              </div>
              <div className="nutrition_item">
                <img
                  className="nutrition_img"
                  src={`${process.env.PUBLIC_URL}/icon_carbs.svg`}
                  alt="Glucides"
                />
                <div className="nutrition_data">
                  <p>{user.keyData.carbohydrateCount}g</p>
                  <p className="caption">Glucides</p>
                </div>
              </div>
              <div className="nutrition_item">
                <img
                  className="nutrition_img"
                  src={`${process.env.PUBLIC_URL}/icon_fat.svg`}
                  alt="Lipides"
                />
                <div className="nutrition_data">
                  <p>{user.keyData.lipidCount}g</p>
                  <p className="caption">Lipides</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
