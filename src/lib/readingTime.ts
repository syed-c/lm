/**
 * Dr. Liyan Massaband - Estimated Reading Time Utility
 * Computes word count and estimated reading minutes based on an average speed of 200 WPM.
 */
export interface ReadingTimeResult {
  minutes: number;
  wordCount: number;
  text: string;
}

export function calculateReadingTime(content: string, wordsPerMinute: number = 200): ReadingTimeResult {
  if (!content) {
    return {
      minutes: 0,
      wordCount: 0,
      text: "0 min read"
    };
  }

  // Remove markdown headers, links, list items, bold/italic symbols to get a clean word estimate
  const cleanText = content
    .replace(/[#*`_~\[\]()\-+>#\n]/g, ' ') // replace markdown characters and newlines with space
    .replace(/\s+/g, ' ')                  // normalize whitespace
    .trim();

  const wordCount = cleanText === '' ? 0 : cleanText.split(' ').length;
  
  // Calculate reading minutes (minimum 1 minute)
  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute));

  return {
    minutes,
    wordCount,
    text: `${minutes} min read`
  };
}
