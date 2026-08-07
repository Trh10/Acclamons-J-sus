export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const TICKETING_URL =
  'https://ticketnayo.com/events/acclamons-jesus-5-edition-au-centre-culturel-et-artistique-p-73347d'

export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}
