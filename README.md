# Timi Owolabi Portfolio

Single-page portfolio for Timi Owolabi, an ML systems engineer working across embodied AI, reinforcement learning, robot control, computer vision, and ML infrastructure.

**Canonical site:** https://www.timiowolabi.com/

## Sections

About, Skills, Experience, Projects, Research, Impact, Writings, News, and Contact are presented together on one responsive page. The portfolio includes a downloadable Full CV and local copies of two invited-talk slide decks.

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
