import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

interface DataItem {
  day: number;
  sessionLength: number;
}

interface Props {
  data: DataItem[];
}

interface AverageSessionsTooltipProps {
  payload?: any[];
}

const AverageSessionsTooltip: React.FC<AverageSessionsTooltipProps> = ({
  payload,
}) => {
  if (!payload || payload.length === 0) return null;

  return (
    <div className="average-session-chart__tooltip">
      <p>{`${payload[0].value} min`}</p>
    </div>
  );
};

const AverageSessionsChart: React.FC<Props> = ({ data }) => {
  const day = ["L", "M", "M", "J", "V", "S", "D"];

  const averageSessionsData = data.map((session, index) => ({
    day: day[index],
    duration: session.sessionLength,
  }));

  return (
    <article className="average-session-chart">
      <h2 className="average-session-chart__title">
        {`Durée moyenne des\n sessions`}
      </h2>
      <LineChart
        data={averageSessionsData}
        height={200}
        width={200}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        title="Session Moyenne"
      >
        <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#fff" />
        <YAxis
          yAxisId="duration"
          dataKey="duration"
          hide={true}
          domain={["dataMin - 20", "dataMax + 20"]}
        />
        <Tooltip
          content={<AverageSessionsTooltip />}
          wrapperStyle={{ outline: "none" }}
          cursor={false}
        />
        <Line
          type="natural"
          yAxisId="duration"
          dataKey="duration"
          dot={false}
          activeDot={{ r: 4 }}
          strokeWidth={2.5}
          stroke="#FFFFFF"
        />
      </LineChart>
    </article>
  );
};

export default AverageSessionsChart;
