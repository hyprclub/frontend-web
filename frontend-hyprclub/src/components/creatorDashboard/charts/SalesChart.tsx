import clsx from "clsx";
import React from "react";
import styles from "./salesChart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ClassNames } from "@emotion/react";

const data = [
  {
    name: "Jan 22",
    uv: 4000,
  },
  {
    name: "Jan 22",
    uv: 3600,
  },
  {
    name: "Jan 22",
    uv: 1000,
  },
  {
    name: "Jan 22",
    uv: 2000,
  },
  {
    name: "Jan 22",
    uv: 1400,
  },
  {
    name: "Jan 22",
    uv: 2390,
  },
  {
    name: "Jan 22",
    uv: 3000,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.label}>{`₹ ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const SalesChart = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className={styles.Heading}>Sales Chart</h2>
          <select
            className={clsx("form-select w-25", styles.select)}
            aria-label="Default select example"
          >
            <option value="1">All Time</option>
            <option value="2">Monthly</option>
            <option value="3">Yearly</option>
          </select>
        </div>
        <div className={styles.chart}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient
                  id="colorGradient"
                  x1="4%"
                  y1="49%"
                  x2="85%"
                  y2="92%"
                >
                  <stop offset="4%" stopColor="rgba(231, 13, 140, 1)" />
                  <stop offset="49%" stopColor="rgba(231, 13, 140, 1)" />
                  <stop offset="85%" stopColor="rgba(246, 164, 76, 1)" />
                  <stop offset="92%" stopColor="rgba(252, 199, 55, 1)" />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                padding={{ left: 30, right: 30 }}
                axisLine={false}
                tickMargin={10}
                tickLine={false}
                tick={{
                  fill: "#8c8c8c",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              />
              <YAxis
                axisLine={false}
                tickMargin={10}
                tickLine={false}
                tick={{
                  fill: "black",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ED0090' }} offset={0}/>
              <Legend />
              <Line
                type="monotone"
                dataKey="uv"
                legendType="none"
                stroke="url(#colorGradient)"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default SalesChart;
