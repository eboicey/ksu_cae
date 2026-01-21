"use client";
import { useEffect, useState } from "react";
import { generateDemoVisits, VisitRecord } from "../../../utils/analytics";
import AnalyticsCharts from "../../../components/AnalyticsCharts";

export default function AnalyticsDashboard() {
  const [visits, setVisits] = useState<VisitRecord[]>([]);
  useEffect(() => {
    setVisits(generateDemoVisits(200));
  }, []);

  // Aggregate analytics
  const totalVisits = visits.length;
  const topPages = Object.entries(
    visits.reduce((acc, v) => {
      acc[v.page] = (acc[v.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1]);

  const trafficSources = Object.entries(
    visits.reduce((acc, v) => {
      acc[v.source] = (acc[v.source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  );

  const deviceBreakdown = Object.entries(
    visits.reduce((acc, v) => {
      acc[v.device] = (acc[v.device] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  );

  const utmCampaigns = Object.entries(
    visits.reduce((acc, v) => {
      if (v.utm?.utm_campaign) {
        acc[v.utm.utm_campaign] = (acc[v.utm.utm_campaign] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>)
  );

  const bounceRate = (visits.filter(v => v.bounced).length / totalVisits) * 100;
  const avgSession =
    visits.reduce((acc, v) => acc + (v.sessionDuration || 0), 0) / totalVisits;

  // Export to CSV
  function exportCSV() {
    const header = "timestamp,page,device,source,utm_campaign,utm_medium,utm_source,sessionDuration,bounced";
    const rows = visits.map(v =>
      [
        v.timestamp,
        v.page,
        v.device,
        v.source,
        v.utm?.utm_campaign || "",
        v.utm?.utm_medium || "",
        v.utm?.utm_source || "",
        v.sessionDuration || "",
        v.bounced ? "1" : "0",
      ].join(",")
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "analytics.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Generate Monthly Report
  function generateReport() {
    const monthVisits = visits.filter(v => {
      const d = new Date(v.timestamp);
      return d > new Date(Date.now() - 2.628e9); // last 1 month
    });
    const report = `Monthly Report\n\nTotal Visits: ${monthVisits.length}\nBounce Rate: ${(
      monthVisits.filter(v => v.bounced).length / monthVisits.length
    ).toFixed(2)}%\nAvg. Session Duration: ${(
      monthVisits.reduce((acc, v) => acc + (v.sessionDuration || 0), 0) /
      monthVisits.length
    ).toFixed(0)}s\nTop Pages: ${Object.entries(
      monthVisits.reduce((acc, v) => {
        acc[v.page] = (acc[v.page] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([p, c]) => `${p} (${c})`)
      .join(", ")}\nTraffic Sources: ${Object.entries(
      monthVisits.reduce((acc, v) => {
        acc[v.source] = (acc[v.source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    )
      .map(([s, c]) => `${s} (${c})`)
      .join(", ")}\nUTM Campaigns: ${Object.entries(
      monthVisits.reduce((acc, v) => {
        if (v.utm?.utm_campaign) {
          acc[v.utm.utm_campaign] = (acc[v.utm.utm_campaign] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>)
    )
      .map(([c, n]) => `${c} (${n})`)
      .join(", ")}`;
    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "monthly_report.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">Analytics Dashboard</h1>
      <AnalyticsCharts visits={visits} />
      <div className="mb-8 grid grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Total Visits</h2>
          <div className="text-4xl font-bold">{totalVisits}</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Bounce Rate</h2>
          <div className="text-4xl font-bold">{bounceRate.toFixed(2)}%</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Avg. Session Duration</h2>
          <div className="text-4xl font-bold">{avgSession.toFixed(0)}s</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Top Pages</h2>
          <ul>
            {topPages.slice(0, 3).map(([page, count]) => (
              <li key={page}>{page} ({count})</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Traffic Sources</h2>
          <ul>
            {trafficSources.map(([source, count]) => (
              <li key={source}>{source} ({count})</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Device Breakdown</h2>
          <ul>
            {deviceBreakdown.map(([device, count]) => (
              <li key={device}>{device} ({count})</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">UTM Campaigns</h2>
          <ul>
            {utmCampaigns.map(([campaign, count]) => (
              <li key={campaign}>{campaign} ({count})</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={exportCSV}
          className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#0A2342] hover:text-white transition-colors duration-200"
        >
          Export to CSV
        </button>
        <button
          onClick={generateReport}
          className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow border border-[#18325a] hover:bg-[#0A2342] hover:text-white transition-colors duration-200"
        >
          Generate Monthly Report
        </button>
      </div>
    </div>
  );
}
