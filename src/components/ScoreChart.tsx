import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

interface Props {
  score: number;
  todayScore: number;
}

const ScoreChart: React.FC<Props> = ({ score, todayScore }) => {
  const scorePercentage = score * 100;
  const todayScorePercentage = todayScore * 100;

  const scoreData = [
    { name: "Score", value: score, fill: "#ff0000" },
    { name: "Score", value: todayScore, fill: "#ff0000" },
    { name: "RestScore", value: 1 - score, fill: "#ffffff" },
    { name: "RestScore", value: 1 - todayScore, fill: "#ffffff" },
  ];

  const legendValue =
    todayScore !== undefined ? todayScorePercentage : scorePercentage;

  return (
    <article className="goal-chart">
      <h2 className="goal-chart__title">Score</h2>
      <PieChart width={265} height={265}>
        <Pie
          data={scoreData}
          innerRadius={70}
          outerRadius={80}
          startAngle={180}
          endAngle={-180}
          dataKey="value"
          cornerRadius="50%"
        >
          {scoreData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} stroke="0" />
          ))}
        </Pie>
        <Legend
          payload={[
            {
              value: (
                <p className="goal-chart__legend">
                  <span className="goal-chart__legend__value">
                    {legendValue}%
                  </span>{" "}
                  de votre objectif
                </p>
              ),
            },
          ]}
          width={70}
          height={70}
          layout="vertical"
          verticalAlign="middle"
        />
      </PieChart>
      <svg
        className="goal-chart__circle"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="70" />
      </svg>
    </article>
  );
};

export default ScoreChart;
