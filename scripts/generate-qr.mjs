// Generates a high-res QR code (PNG + SVG) for the production URL, for printing.
// Usage: node scripts/generate-qr.mjs https://lissienails.com

import QRCode from 'qrcode'
import { writeFileSync } from 'node:fs'

const url = process.argv[2]

if (!url) {
  console.error('Usage: node scripts/generate-qr.mjs <url>')
  process.exit(1)
}

const options = {
  color: {
    dark: '#3C3A2D', // --capers
    light: '#F7F3EE', // --white
  },
  margin: 2,
}

const pngBuffer = await QRCode.toBuffer(url, { ...options, width: 1024, type: 'png' })
writeFileSync('qr-code.png', pngBuffer)

const svgString = await QRCode.toString(url, { ...options, type: 'svg' })
writeFileSync('qr-code.svg', svgString)

console.log(`QR code generated for ${url}`)
console.log('→ qr-code.png')
console.log('→ qr-code.svg')
