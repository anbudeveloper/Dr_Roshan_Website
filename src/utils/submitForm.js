export async function submitForm(data) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok || !json.success) throw new Error(json.error || 'Submission failed')
  return json
}
