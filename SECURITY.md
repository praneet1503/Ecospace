Security notes

- Upgraded `next` to 16.0.10 to address React Server Components vulnerabilities (CVE-2025-66478 and subsequent follow-ups CVE-2025-55183, CVE-2025-55184, CVE-2025-67779).
- Kept `react` and `react-dom` pinned to `18.3.1` (compatible with the app) to avoid accidental upgrade to 19.x which could introduce breaking changes. If you intentionally move to React 19, follow React security advisories and ensure `react-server-dom-*` packages are updated.

Actions you should take after upgrading and deploying:

- Rotate sensitive environment variables and secrets if the app was exposed during the vulnerable window (advice from Next.js advisory).
- Add Dependabot or similar to auto-open PRs for security updates (see suggestions below).

References:
- Next.js security update: https://nextjs.org/blog/security-update-2025-12-11
- React security posts: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components and https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components

CI Suggestions:
- Add an npm audit step and a check that `next` is not on a vulnerable version.
- Add a Dependabot or GitHub Actions job that fails if `next` is < 16.0.10 for 16.0.x line.
