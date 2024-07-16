export function getCookie(name: string) {
  console.log('getCookie name', name)
  const cookieString = decodeURIComponent(document.cookie)
  console.log('getCookie cookieString', cookieString)
  const cookies = cookieString.split(';')
  console.log('getCookie cookies', cookies)

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=')
    console.log('getCookie cookieName', cookieName)
    console.log('getCookie cookieValue', cookieValue)

    if (cookieName === name) {
      return cookieValue
    }
  }

  // Cookie not found
  return undefined
}
