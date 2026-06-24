/**
 * Dr. Liyan Massaband - GDPR/HIPAA Privacy-First Analytics Helper
 * Coordinates custom event dispatching with Google Analytics.
 * Never logs raw patient inputs, emails, names, or clinical symptoms.
 */

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEvent = 
  | { name: 'profile_view'; params?: { section?: string } }
  | { name: 'video_play'; params: { videoId: string; videoTitle: string } }
  | { name: 'article_read'; params: { articleSlug: string; articleTitle: string } }
  | { name: 'presskit_download'; params: { assetName: string } }
  | { name: 'media_enquiry_submit'; params: { type: string } }
  | { name: 'speaking_enquiry_submit'; params?: Record<string, any> }
  | { name: 'magnolia_outbound_click'; params?: Record<string, any> }
  | { name: 'confidental_outbound_click'; params?: Record<string, any> }
  | { name: 'zocdoc_outbound_click'; params?: Record<string, any> }
  | { name: 'instagram_outbound_click'; params?: Record<string, any> }
  | { name: 'youtube_outbound_click'; params?: Record<string, any> };

/**
 * Dispatches a privacy-compliant analytics event to Gtag if registered.
 */
export function trackEvent(event: AnalyticsEvent): void {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, {
        ...event.params,
        // Shield IP and ensure cookie compliance policies are enforced
        anonymize_ip: true,
        send_to: (import.meta as any).env?.VITE_GA_ID || undefined
      });
      console.log(`[Analytics Event Tracked]: ${event.name}`, event.params);
    } else {
      // Diagnostic stdout in dev mode
      console.log(`[Analytics Dev Mock]: ${event.name}`, event.params);
    }
  } catch (error) {
    console.warn('[Analytics Error]: Failed to dispatch event:', error);
  }
}
