import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  PerformanceEntry,
  PerformanceModel,
} from "../models/performanceDataFormat";

interface DataItem {
  value: number;
}

interface Props {
  data: DataItem[];
}

export const PerformanceChart: React.FC<Props> = ({ data }) => {
  const performanceEntry: PerformanceEntry = {
    data: data.map((item) => ({ value: item.value })),
  };

  const performanceModel = new PerformanceModel(performanceEntry);
  const performanceData = performanceModel.getPerformanceData();

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
