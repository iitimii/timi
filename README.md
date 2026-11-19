# Timi Owolabi Portfolio

Single-page portfolio for Timi Owolabi, an ML systems engineer working across embodied AI, reinforcement learning, robot control, computer vision, and ML infrastructure.

**Canonical site:** https://www.timiowolabi.com/

## Sections

Home, Research, Projects, Experience, Writings, Talks, Impact, and News are presented together on one responsive page. Home includes the biography, contact information, and social profiles. Professional experience, research experience, education, and skills appear as collapsed subsections of Experience. The portfolio includes a downloadable Full CV and local copies of two invited-talk slide decks.

The former `/?view=academic` URL serves the same complete portfolio. There is no separate academic view; both URLs use `https://www.timiowolabi.com/` as the canonical page.

## Tech Stack

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite and Tailwind CSS 4
- Bun

## Development

```sh
bun install
bun run dev
```

The development server prints its local URL after startup.

## Validation

```sh
bun run lint
bun run build
```

Note that `bun run build` targets Cloudflare and writes `.output/`. It does not
populate `.vercel/output/`, so never deploy `--prebuilt` straight after it.

## Deployment

Pushes to `main` deploy to production automatically via the Vercel Git
integration; other branches get preview deployments.

To deploy by hand, build for the Vercel target first so the correct output
directory is produced:

```sh
vercel build --prod
vercel deploy --prebuilt --prod
```

## Contact

- GitHub: [github.com/iitimii](https://github.com/iitimii)
- LinkedIn: [linkedin.com/in/timi-owolabi](https://www.linkedin.com/in/timi-owolabi/)
- Google Scholar: [Timi Owolabi](https://scholar.google.com/citations?user=mJOLhAcAAAAJ&hl=en)
- Email: timiiowolabi@gmail.com
