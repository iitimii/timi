# Timi Owolabi — Portfolio

A minimal Next.js portfolio for Timi Owolabi's work in machine learning,
robotics, control, research, and embodied AI. The canonical site is
[iitimii.github.io](https://iitimii.github.io).

## Content sources

Portfolio facts were migrated from the visible portfolio at
[iitimii.github.io](https://iitimii.github.io) and its linked Research CV. A
copy of the CV is retained at
[`public/documents/timi-owolabi-research-cv.pdf`](public/documents/timi-owolabi-research-cv.pdf).

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

No environment file is required. To enable Google Analytics, copy `.env.copy`
to `.env.local` and set the optional `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` value.

## Verification

```bash
npm test
npm run lint
npm run build
```

## Content and assets

- Personal, project, experience, publication, skill, and supporting content is
  maintained in `config/`.
- Shared portfolio selectors are in `lib/portfolio.ts`.
- Profile media is in `public/profile/`, downloadable documents are in
  `public/documents/`, and branding is in `public/icons/`.
- Project images and videos referenced by `config/projects.ts` are in
  `public/projects/`.

## Deployment

Deploy the production output from `npm run build` with a Next.js-compatible
host. The canonical URL, sitemap, robots file, and structured metadata are set
to `https://iitimii.github.io`; update them together if the deployment origin
changes.

## License and attribution

Released under the [MIT License](LICENSE).

Template attribution: adapted from [Naman Barkiya's minimal Next.js portfolio](https://github.com/namanbarkiya/minimal-next-portfolio), used under its MIT license.
