// Analytics utilities and demo data
export type VisitRecord = {
  timestamp: string;
  page: string;
  device: string;
  source: string;
  utm?: {
    utm_campaign?: string;
    utm_medium?: string;
    utm_source?: string;
  };
  sessionDuration?: number;
  bounced?: boolean;
};

// Simulate demo data
export function generateDemoVisits(count: number): VisitRecord[] {
  const pages = ["/", "/programs", "/research", "/faculty", "/labs", "/news"];
  const devices = ["Desktop", "Mobile", "Tablet"];
  const sources = ["Direct", "Search", "Social", "Email"];
  const campaigns = ["spring2026", "newsletter", "openhouse", "socialpush"];
  const mediums = ["email", "social", "web"];
  const utmSources = ["facebook", "twitter", "kent.edu", "mailchimp"];
  const visits: VisitRecord[] = [];
  for (let i = 0; i < count; i++) {
    const page = pages[Math.floor(Math.random() * pages.length)];
    const device = devices[Math.floor(Math.random() * devices.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const utm = Math.random() > 0.5 ? {
      utm_campaign: campaigns[Math.floor(Math.random() * campaigns.length)],
      utm_medium: mediums[Math.floor(Math.random() * mediums.length)],
      utm_source: utmSources[Math.floor(Math.random() * utmSources.length)],
    } : undefined;
    const sessionDuration = Math.floor(Math.random() * 600) + 30; // 30s to 10min
    const bounced = Math.random() < 0.3;
    visits.push({
      timestamp: new Date(Date.now() - Math.random() * 2.628e9).toISOString(), // last 1 month
      page,
      device,
      source,
      utm,
      sessionDuration,
      bounced,
    });
  }
  return visits;
}
