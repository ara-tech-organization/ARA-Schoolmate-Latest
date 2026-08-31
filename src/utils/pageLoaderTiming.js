export const LOADER_DURATION_MS = 3400

const appStart = typeof performance !== 'undefined' ? performance.now() : 0
let loaderDone = false

export function markLoaderDone() {
  loaderDone = true
}

/**
 * How long a hero's Reveal should delay its animation so it plays after the
 * loader has actually disappeared, instead of finishing invisibly underneath
 * it. Returns 0 once the loader has already run once this session (e.g. the
 * hero remounts from client-side navigation, not a fresh page load).
 */
export function getHeroRevealDelay() {
  if (loaderDone) return 0
  const elapsed = (typeof performance !== 'undefined' ? performance.now() : 0) - appStart
  return Math.max(0, LOADER_DURATION_MS - elapsed)
}
