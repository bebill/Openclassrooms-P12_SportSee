import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

interface DataItem {
  kind: string;
  value: number;
}

interface Props {
  data: DataItem[];
}

export const PerformanceChart: React.FC<Props> = ({ data }) => {
  const kind = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  const performanceData = data.map((item, index) => ({
    kind: kind[index],
    value: item.value,
  }));

  return (
    <article className="performance-performance">
      <RadarChart
        data={performanceData}
        height={265}
        width={265}
        title="Performance"
      >
        <PolarGrid radialLines={false} gridType="polygon" stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#FFFFFF" }}
          fontSize="11px"
          fontWeight="bold"
          dy={2}
        />
        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </article>
  );
};
