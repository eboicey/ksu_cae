export type Submission = {
  id: string;
  type: "contact" | "application" | string;
  club?: string;
  name: string;
  email: string;
  message?: string;
  position?: string;
  resumeUrl?: string;
  resumeName?: string;
  timestamp: string; // ISO
};

const KEY = "submissions";

function readAll(): Submission[] {
  try {
    const raw = localStorage.getItem(KEY) || "[]";
    const parsed = JSON.parse(raw) as Submission[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function listSubmissions(): Submission[] {
  return readAll().sort((a, b) => (b.timestamp > a.timestamp ? 1 : -1));
}

export function addSubmission(s: Omit<Submission, "id" | "timestamp">) {
  const all = readAll();
  const submission: Submission = {
    ...s,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    timestamp: new Date().toISOString(),
  };
  all.push(submission);
  localStorage.setItem(KEY, JSON.stringify(all));
  // Emit storage-like event for same-tab listeners
  window.dispatchEvent(new CustomEvent("submissions:updated", { detail: submission }));
  return submission;
}

export function clearSubmissions() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent("submissions:updated", { detail: null }));
}
