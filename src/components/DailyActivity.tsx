import React, { useState, useEffect } from "react";
import { fetchUserActivity } from "../services/fetchData";
import { useParams } from "react-router-dom";
import DailyActivityChart from "./DailyActivityChart";

const DailyActivity = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivityData = await fetchUserActivity(Number(id));
        console.log("fetched data daily activity", userActivityData);
        if (userActivityData) {
          setUser(userActivityData);
        } else {
          console.error("Utilisateur non trouvé");
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données utilisateur:",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="daily-activity">
      <DailyActivityChart data={user.sessions} />
    </div>
  );
};

export default DailyActivity;
