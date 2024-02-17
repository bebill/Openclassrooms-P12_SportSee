import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface DataItem {
  day: string;
  kilogram: number;
  calories: number;
}

interface Props {
  data: DataItem[];
}

interface DailyActivityTooltipProps {
  payload?: any[];
}

const DailyActivityTooltip: React.FC<DailyActivityTooltipProps> = ({
  payload,
}) => {
  if (!payload || payload.length === 0) return null;

  return (
    <div className="daily-activity-chart__tooltip">
      <p>{`${payload[0].value} kg`}</p>
      <p>{`${payload[1].value} kCal`}</p>
    </div>
  );
};

export const DailyActivityChart: React.FC<Props> = ({ data }) => {
  const dailyActivityData = data.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <article className="daily-activity-chart">
      <h2 className="daily-activity-chart__title">Activité quotidienne</h2>

      <BarChart
        className="daily-activity-chart__bar-chart"
        data={dailyActivityData}
        height={300}
        width={800}
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
        title="Activité quotidienne"
      >
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ right: 5 }}
          height={50}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          domain={["dataMin - 2", "dataMax + 1"]}
          allowDecimals={false}
          orientation="right"
          tickMargin={20}
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          // set the bars height to be the maximum data of calories
          domain={[0, "dataMax + 50"]}
          hide={true}
          tickCount={3}
        />
        <Tooltip
          allowEscapeViewBox={{ x: true }}
          offset={30}
          content={<DailyActivityTooltip />}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconSize={8}
          payload={[
            {
              id: "kilogram",
              value: "Poids (kg)",
              type: "circle",
              color: "#282d30",
            },
            {
              id: "calories",
              value: "Calories brûlées (kCal)",
              type: "circle",
              color: "#ff0000",
            },
          ]}
          wrapperStyle={{ top: -20 }}
        ></Legend>
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282d30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#ff0000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </article>
  );
};
