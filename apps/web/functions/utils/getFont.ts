export default async function getFont(
  origin: string,
  env: {
    ASSETS: {
      fetch: typeof fetch
    }
  },
) {
  try {
    // Cloudflare Workers needs a full URL to fetch from,
    // but will only use the pathname to fetch from the ASSETS binding.
    const req = new Request('https://dummy.example/fonts/PoppinsRounded-Rounded.ttf', {
      headers: { 'Accept-Encoding': 'identity' }, // prevent TTF → WOFF2 rewrite
    })
    const font = await env.ASSETS.fetch(req)
    if (!font.ok) {
      throw new Error('Failed to fetch font from ASSETS binding')
    }
    return font.arrayBuffer()
  } catch {
    // Fallback to fetching from the origin if the ASSETS binding is not available.
    const url = origin + '/fonts/PoppinsRounded-Rounded.ttf'
    const font = await fetch(url)
    return font.arrayBuffer()
  }
}
