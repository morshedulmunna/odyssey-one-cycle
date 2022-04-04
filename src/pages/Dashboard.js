import React from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  BarChart,
  Tooltip,
  Bar,
  Treemap,
} from "recharts";
const data = [
  {
    month: "January",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "February",
    investment: 300000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "March",
    investment: 500000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "April",
    investment: 300000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 600000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "July",
    investment: 900000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "August",
    investment: 200000,
    sell: 670,
    revenue: 61000,
  },
  {
    month: "September",
    investment: 500000,
    sell: 670,
    revenue: 61000,
  },
  {
    month: "October",
    investment: 900000,
    sell: 670,
    revenue: 61000,
  },
  {
    month: "November",
    investment: 500000,
    sell: 670,
    revenue: 61000,
  },
  {
    month: "December",
    investment: 600000,
    sell: 670,
    revenue: 61000,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="chart-wrapper">
            <div className="chat_section1">
              <div className="chart-1">
                <RadarChart
                  outerRadius={150}
                  width={600}
                  height={350}
                  data={data}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="month" />
                  <PolarRadiusAxis angle={20} domain={[0, 10]} />
                  <Radar
                    name="Sell"
                    dataKey="sell"
                    stroke="#51e8ef"
                    fill="#51e8ef"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Revenue"
                    dataKey="revenue"
                    stroke="#55F80F"
                    fill="#55F80F"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Investment"
                    dataKey="investment"
                    stroke="#0121FA"
                    fill="#0121FA"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </div>
              {/* Chart-2 */}
              <div className="chart-2">
                <BarChart width={600} height={350} data={data}>
                  <CartesianGrid strokeDasharray="1 7" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" fill="#51e8ef" />
                  <Bar dataKey="sell" fill="#55F80F" />
                  <Bar dataKey="revenue" fill="#0121FA" />
                </BarChart>
              </div>
            </div>
            <div className="chat_section2">
              <h3>Monthly Investment Data</h3>
              <LineChart width={1230} height={400} data={data} margin={"auto"}>
                <CartesianGrid strokeDasharray="1 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#51e8ef" />
                <Line type="monotone" dataKey="sell" stroke="#55F80F" />
                <Line type="monotone" dataKey="revenue" stroke="#0121FA" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
