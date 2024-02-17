import React, { useState, useEffect } from "react";
import { fetchUserData } from "../services/fetchData";
import { useParams } from "react-router-dom";
import { ScoreChart } from "./ScoreChart";

const Score = () => {
  const { id } = useParams<{ id: string }>();
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
    <div className="score">
      <ScoreChart score={user.score} todayScore={user.todayScore} />
    </div>
  );
};

export default Score;
