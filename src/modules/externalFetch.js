export async function externalFetch(url, method, body) {
    const result = await fetch(url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: { 'content-type': 'application/json' },
    })
    if (result.ok) {
      return result.json()
    }
      return false
  }