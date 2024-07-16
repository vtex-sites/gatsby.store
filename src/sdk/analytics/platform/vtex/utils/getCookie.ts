export function getCookie(name: string) {
  const cookieString = decodeURIComponent(document.cookie)
  const cookies = cookieString.split(';')

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=')

    if (cookieName === name) {
      return cookieValue
    }
  }

  // Cookie not found
  return undefined
}
