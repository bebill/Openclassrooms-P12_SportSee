import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { ScoreModel } from "../models/scoreDataFormat";

interface Props {
  score: number;
  todayScore: number;
}

export const ScoreChart: React.FC<Props> = ({ score, todayScore }) => {
  const scoreModel = new ScoreModel(score, todayScore);
  const scoreData = scoreModel.getScoreData();

  const scoreValue = scoreData[0].value;
  const scorePercentage = scoreValue * 100;
  const endScoreAngle = 90 + (scorePercentage / 100) * 360;
  const endAngle = endScoreAngle;
  const legendValue = scorePercentage;

  return (
    <article className="score-chart">
      <h2 className="score-chart__title">Score</h2>
      <RadialBarChart
        width={265}
        height={265}
        data={scoreData}
        innerRadius={80}
        outerRadius={80}
        startAngle={90}
        endAngle={endAngle}
        barSize={10}
        title="Score Percentage"
      >
        <RadialBar dataKey="value" fill="#ff0000" cornerRadius={10} />
        <Legend
          payload={[
            {
              value: (
                <p className="score-chart__legend">
                  <span className="score-chart__legend__value">
                    {legendValue}%
                  </span>
                  <br />
                  de votre <br />
                  objectif
                </p>
              ),
            },
          ]}
        />
      </RadialBarChart>
    </article>
  );
};
