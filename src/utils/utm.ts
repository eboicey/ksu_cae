// UTM tracking utility
export type UTMParams = {
  utm_campaign?: string;
  utm_medium?: string;
  utm_source?: string;
};

export function parseUTM(url: string): UTMParams {
  const params = new URL(url, 'http://dummy').searchParams;
  return {
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_source: params.get('utm_source') || undefined,
  };
}

export function buildUTMUrl(base: string, utm: UTMParams): string {
  const url = new URL(base, 'http://dummy');
  if (utm.utm_campaign) url.searchParams.set('utm_campaign', utm.utm_campaign);
  if (utm.utm_medium) url.searchParams.set('utm_medium', utm.utm_medium);
  if (utm.utm_source) url.searchParams.set('utm_source', utm.utm_source);
  return base + url.search;
}
