/**
 * Learned Answers Cache
 *
 * Saves professor responses so they can be reused for future similar questions
 * from any user. Uses localStorage for persistence across sessions.
 *
 * Priority chain in the knowledge pipeline:
 *   1. Doctrinal KB (pre-loaded knowledge)
 *   2. Learned answers cache (previously answered questions)
 *   3. Gemini API (only if neither has the answer)
 */

export interface LearnedAnswer {
  question: string;
  answer: string;
  grade: number;
  timestamp: number;
  keywords: string[];
}

const STORAGE_KEY = 'emecu_learned_answers';
const MAX_CACHED = 500; // limit cache size

/**
 * Extract simple keywords from a question.
 * Removes punctuation and filters words longer than 4 characters.
 */
function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[¿?¡!,.;:()]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 4);
}

/**
 * Save a new learned answer to the cache.
 */
export function saveLearnedAnswer(
  question: string,
  answer: string,
  grade: number
): void {
  const cached = getLearnedAnswers();

  const keywords = extractKeywords(question);

  cached.push({
    question: question.trim(),
    answer: answer.trim(),
    grade,
    timestamp: Date.now(),
    keywords,
  });

  // Keep cache bounded — drop oldest entries when over the limit
  if (cached.length > MAX_CACHED) {
    cached.splice(0, cached.length - MAX_CACHED);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cached));
}

/**
 * Get all cached learned answers from localStorage.
 */
export function getLearnedAnswers(): LearnedAnswer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Search the learned answers cache for a previously answered question
 * similar to the user's message.
 *
 * Returns the best matching answer if the similarity score meets the threshold
 * (>= 12 points), or null otherwise.
 *
 * Scoring:
 *   - Keyword hit:    +10 per matched keyword
 *   - Word overlap:   +2 per matched word (length > 4)
 *   - Threshold:      12 points minimum to return a result
 */
export function searchLearnedAnswers(userMessage: string): string | null {
  const cached = getLearnedAnswers();
  if (cached.length === 0) return null;

  const msg = userMessage.toLowerCase();
  let bestMatch: LearnedAnswer | null = null;
  let bestScore = 0;

  for (const entry of cached) {
    let score = 0;

    // Keyword matching — each keyword hit is a strong signal
    for (const kw of entry.keywords) {
      if (msg.includes(kw)) score += 10;
    }

    // Word overlap with cached question — weaker signal but adds up
    const entryWords = entry.question
      .toLowerCase()
      .replace(/[¿?¡!,.;:()]/g, '')
      .split(/\s+/);

    for (const word of entryWords) {
      if (word.length > 4 && msg.includes(word)) score += 2;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore >= 12 ? bestMatch!.answer : null;
}

/**
 * Clear all cached learned answers.
 */
export function clearLearnedAnswers(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get the current count of cached learned answers.
 */
export function getLearnedAnswersCount(): number {
  return getLearnedAnswers().length;
}
