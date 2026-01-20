"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { VisitRecord } from "../utils/analytics";

type Props = {
  visits: VisitRecord[];
};

export default function AnalyticsCharts({ visits }: Props) {
  const visitsRef = useRef<HTMLCanvasElement>(null);
  const pagesRef = useRef<HTMLCanvasElement>(null);
  const devicesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (visitsRef.current) {
      const ctx = visitsRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: visits.map(v => new Date(v.timestamp).toLocaleDateString()),
            datasets: [
              {
                label: "Visits",
                data: visits.map(() => 1),
                borderColor: "#1D428A",
                backgroundColor: "#FFD10033",
                fill: true,
              },
            ],
          },
          options: {
            plugins: { legend: { display: false } },
            scales: { x: { display: false } },
          },
        });
      }
    }
    if (pagesRef.current) {
      const ctx = pagesRef.current.getContext("2d");
      if (ctx) {
        const pageCounts: Record<string, number> = {};
        visits.forEach(v => {
          pageCounts[v.page] = (pageCounts[v.page] || 0) + 1;
        });
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: Object.keys(pageCounts),
            datasets: [
              {
                label: "Top Pages",
                data: Object.values(pageCounts),
                backgroundColor: "#FFD100",
                borderColor: "#1D428A",
              },
            ],
          },
          options: {
            plugins: { legend: { display: false } },
          },
        });
      }
    }
    if (devicesRef.current) {
      const ctx = devicesRef.current.getContext("2d");
      if (ctx) {
        const deviceCounts: Record<string, number> = {};
        visits.forEach(v => {
          deviceCounts[v.device] = (deviceCounts[v.device] || 0) + 1;
        });
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: Object.keys(deviceCounts),
            datasets: [
              {
                label: "Devices",
                data: Object.values(deviceCounts),
                backgroundColor: ["#FFD100", "#1D428A", "#0A2342"],
              },
            ],
          },
        });
      }
    }
  }, [visits]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Visits Over Time</h3>
        <canvas ref={visitsRef} height={200}></canvas>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Top Pages</h3>
        <canvas ref={pagesRef} height={200}></canvas>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Device Breakdown</h3>
        <canvas ref={devicesRef} height={200}></canvas>
      </div>
    </div>
  );
}
