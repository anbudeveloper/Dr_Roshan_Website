export async function submitForm(data) {
  const res = await fetch('http://localhost:5000/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type:      data.email || data.message ? 'contact' : 'appointment',
      name:      data.name,
      phone:     data.phone,
      email:     data.email     || '',
      treatment: data.treatment || 'Not specified',
      date:      data.date      || 'Not specified',
      message:   data.message   || '',
    }),
  })

  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Email send failed')
  return result
}
