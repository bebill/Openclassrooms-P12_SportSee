import React, { useState, useEffect } from "react";
import { fetchUserPerformance } from "../services/fetchData";
import { useParams } from "react-router-dom";
import { PerformanceChart } from "./PerformanceChart";

const Performance = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformanceData = await fetchUserPerformance(Number(id));
        console.log("fetched data performance", userPerformanceData);
        if (userPerformanceData) {
          setUser(userPerformanceData);
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
    <div className="performance">
      <PerformanceChart data={user.data} />
    </div>
  );
};

export default Performance;
