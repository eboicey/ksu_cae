"use client";
import { useState } from "react";
import { buildUTMUrl } from "../../utils/utm";

export default function CampaignBuilder() {
  const [baseUrl, setBaseUrl] = useState("");
  const [utm_campaign, setCampaign] = useState("");
  const [utm_medium, setMedium] = useState("");
  const [utm_source, setSource] = useState("");
  const [result, setResult] = useState("");

  function handleGenerate() {
    setResult(
      buildUTMUrl(baseUrl, { utm_campaign, utm_medium, utm_source })
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">UTM Campaign Builder</h1>
      <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
        Generate UTM URLs for newsletters, emails, social media, and more. Fill in the fields below and copy the generated link.
      </p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Base URL (e.g. https://cae.kent.edu/programs)"
          value={baseUrl}
          onChange={e => setBaseUrl(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="utm_campaign"
          value={utm_campaign}
          onChange={e => setCampaign(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="utm_medium"
          value={utm_medium}
          onChange={e => setMedium(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="utm_source"
          value={utm_source}
          onChange={e => setSource(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleGenerate}
          className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded shadow"
        >
          Generate UTM URL
        </button>
        {result && (
          <div className="mt-4 p-4 bg-zinc-100 rounded">
            <span className="font-mono break-all">{result}</span>
          </div>
        )}
      </div>
      <div className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
        <strong>How to use:</strong> Copy the generated URL and use it in your newsletter, email, or social media campaign. UTM parameters will be tracked in analytics.
      </div>
    </div>
  );
}
