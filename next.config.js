/** @type {import('next').NextConfig} */
// Security: upgraded to Next.js 16.0.10 to address React Server Components
// vulnerabilities (CVE-2025-66478 and follow-ups). See SECURITY.md and
// https://nextjs.org/blog/security-update-2025-12-11 for details.
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig