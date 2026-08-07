export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const TICKETING_URL = 'https://ticketnayo.com/events/acclamons-jesus'

export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}
