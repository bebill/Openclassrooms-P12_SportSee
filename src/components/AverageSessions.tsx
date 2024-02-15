import React, { useState, useEffect } from "react";
import { fetchUserAverageSessions } from "../services/fetchData";
import { useParams } from "react-router-dom";
import AverageSessionsChart from "./AverageSessionsChart";

const AverageSessions = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAverageSession = await fetchUserAverageSessions(Number(id));
        console.log("fetched data average sessions", userAverageSession);
        if (userAverageSession) {
          setUser(userAverageSession);
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
    <div className="average-sessions">
      <AverageSessionsChart data={user.sessions} />
    </div>
  );
};

export default AverageSessions;
