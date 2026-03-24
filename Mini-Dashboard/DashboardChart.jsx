import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 750 },
  { month: "Apr", users: 900 }
];

export default function DashboardChart() {
  return (
    <div className="chart">
      <h3>User Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
