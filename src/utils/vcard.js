// Escapes commas, semicolons, backslashes and newlines per the vCard 3.0 spec.
function escapeField(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

// Folds a line at 75 octets with a leading space on continuation lines, as required by RFC 6350.
function foldLine(line) {
  if (line.length <= 75) return line
  const parts = []
  let rest = line
  while (rest.length > 75) {
    parts.push(rest.slice(0, 75))
    rest = ' ' + rest.slice(75)
  }
  parts.push(rest)
  return parts.join('\r\n')
}

export function buildVCard(business, photoBase64Png) {
  const { name, phoneE164, website, instagramUrl, address } = business
  const addressLine = [
    '',
    '',
    escapeField(address.line1 + (address.line2 ? ', ' + address.line2 : '')),
    escapeField(address.city),
    escapeField(address.region),
    escapeField(address.postalCode),
    escapeField(address.country),
  ].join(';')

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${escapeField(name)};;;`,
    `FN:${escapeField(name)}`,
    `ORG:${escapeField(name)}`,
    `TEL;TYPE=CELL,VOICE:${phoneE164}`,
    `URL:${website}`,
    `URL;TYPE=Instagram:${instagramUrl}`,
    `ADR;TYPE=WORK:${addressLine}`,
  ]

  if (photoBase64Png) {
    lines.push(`PHOTO;ENCODING=b;TYPE=PNG:${photoBase64Png}`)
  }

  lines.push('END:VCARD')

  return lines.map(foldLine).join('\r\n')
}

export async function downloadVCard(business, logoUrl) {
  let photoBase64Png
  try {
    if (logoUrl) {
      const response = await fetch(logoUrl)
      const blob = await response.blob()
      if (blob.type === 'image/png') {
        const buffer = await blob.arrayBuffer()
        photoBase64Png = btoa(
          Array.from(new Uint8Array(buffer))
            .map((byte) => String.fromCharCode(byte))
            .join(''),
        )
      }
    }
  } catch {
    // if the logo can't be fetched/encoded, just skip the photo field
  }

  const vcard = buildVCard(business, photoBase64Png)
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${business.name.replace(/\s+/g, '-')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}
