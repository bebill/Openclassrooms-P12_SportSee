import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  Legend,
} from "recharts";

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

interface AverageSessionsCursorProps {
  points: { x: number; y: number }[];
  width: number;
  height: number;
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

const AverageSessionsCursor: React.FC<AverageSessionsCursorProps> = ({
  points,
  width,
  height,
}) => {
  const { x } = points[0];
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      stroke="none"
      x={x}
      y={0}
      width={width}
      height={height}
    />
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
      <LineChart
        data={averageSessionsData}
        height={265}
        width={265}
        title="Durée moyenne des sessions"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#FFFFFF", opacity: 0.5 }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis hide={true} domain={["dataMin - 20", "dataMax + 20"]} />{" "}
        <Tooltip
          content={<AverageSessionsTooltip />}
          cursor={
            <AverageSessionsCursor points={[]} width={500} height={500} />
          }
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          payload={[
            {
              value: "Durée moyenne des sessions",
            },
          ]}
        ></Legend>
        <Line
          type="natural"
          yAxisId={0}
          dataKey="duration"
          dot={false}
          activeDot={{ r: 3, fill: "#FFFFFF" }}
          strokeWidth={2.5}
          stroke="url(#lineGradient)"
        />
      </LineChart>
    </article>
  );
};

export default AverageSessionsChart;
