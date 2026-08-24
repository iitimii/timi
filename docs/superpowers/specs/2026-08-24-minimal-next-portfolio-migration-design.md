# Minimal Next Portfolio Migration Design

## Objective

Replace the existing Timi Next.js site with the `namanbarkiya/minimal-next-portfolio` codebase and adapt that template into a source-backed research, robotics, and engineering portfolio for Timi Owolabi.

The finished repository must look and behave like the upstream template while containing no public-facing Naman Barkiya content, template promotion, sample blogs, placeholder portfolio records, or required third-party secrets.

## Authoritative Sources

Content comes from two local sources in `../iitimii.github.io`:

1. `index.html` is authoritative for Timi's public voice, biography, research interests, social links, visual project descriptions, project links, talks, and teaching entries.
2. `data/Timi's Research CV.pdf` is authoritative for formal names, dates, education, technical skills, research and professional experience, awards, leadership, and the additional publication not present on the visible page.

When the sources overlap, use the newer or more specific statement without changing its factual meaning. Keep the first-person tone from the visible portfolio for the home biography. Do not infer skill ratings, dates, employers, awards, publication status, or project claims that neither source states.

## Repository Replacement Boundary

- Preserve the existing `timi/.git` directory, current `origin`, branch history, and repository identity.
- Replace the existing application files with a clean copy of upstream commit `263950f499005cacf20ffc4812fd2dc563a611de`, the default-branch revision inspected on 2026-08-24.
- Preserve this specification and its implementation plan under `docs/superpowers/` so the migration remains auditable.
- Keep the two existing `.hallmark` deletions deleted; do not recreate Hallmark output or configuration.
- Do not copy the upstream `.git` directory.
- Preserve the upstream MIT `LICENSE` and add concise template attribution in the README and site footer.
- Replace the upstream README with project-specific setup, content-editing, environment, and attribution instructions.

## Information Architecture

The primary navigation will contain:

1. **Projects** - all research and engineering projects with filterable cards and detail pages.
2. **Experience** - professional, research, and leadership roles in a chronological timeline with detail pages.
3. **Publications** - publications and manuscripts with authorship, venue/status, year, and available paper or code links.
4. **Skills** - source-backed technical skill groups without subjective star ratings.
5. **Contact** - email and social links that work without backend credentials.
6. **Resume** - a direct link to the copied Research CV PDF.

Home remains accessible through the Timi Owolabi wordmark. The upstream Blogs, Community, and Contributions navigation items and routes will be removed because the source portfolio does not provide corresponding content.

## Page Design

### Home

Retain the template's full-height animated hero, circular portrait, theme selector, and responsive layout. Replace the hero with:

- Display name: `Timi Owolabi`
- Supporting name note: `Also appears as Oluwatimilehin or Timilehin`
- Professional focus: machine learning, robotics, and embodied AI
- Portrait: `images/timi.jpg`
- Primary actions: Resume and Contact

Follow the hero with a concise first-person introduction assembled from the three visible biography paragraphs. Preserve the stated 4.85/5.0 Electrical Engineering GPA, Covenant University, GDG robotics leadership, collaboration with Dr. Daniel Omeiza at the Oxford Robotics Institute, teaching and mentorship work, and the long-term embodied-AI vision.

The remaining home sections will feature:

- Three selected projects
- Three recent or current experience entries
- Three selected publications
- Source-backed technical skill groups
- A compact education, awards, talks, and teaching summary

Each featured section links to its full destination where one exists.

### Projects

Adapt the upstream project card and detail-page system to research and engineering work. The project model will support:

- Stable slug
- Title and year/status
- Short and detailed descriptions
- Category labels
- Technology list
- Authors or collaborators when stated
- GitHub, paper, blog, or external links when stated
- Cover image
- Optional video
- Optional project note or affiliation statement

The project collection will include:

1. Humanoid
2. ALOHA Replication: Bimanual Manipulation with OpenVLA-OFT
3. Autonomous Drone
4. Affordable 3D-Printed Manipulator with Comparable Performance to WidowX 250 S
5. VisionPick: Learning Visual Pick-and-Place with JAX and MuJoCo
6. TurtleBot
7. CamAI: Real-Time Action Recognition and Emergency Alerts
8. 3D Brain Tumor Segmentation
9. ClothSegNet: Semantic Segmentation of Clothing via U-Net
10. Coordinated Control of Multi-Quadrotor Swarms

The tenth item is both a research manuscript and a substantial implementation project, so it appears in Projects and Publications with links appropriate to each context.

Cards use the source images. Detail pages may use the paired MP4 media when available. Videos must be muted, looped, inline, and accompanied by accessible fallback text or poster imagery.

### Experience

Use the template timeline and detail-page patterns for source-backed roles:

- Quidax Technologies - Graduate Trainee, Software Engineering & DevOps, January 2026 to Present
- Trotta Technologies, Inc - Founding Machine Learning Engineer, January 2026 to February 2026
- Scrella Technologies - Lead Machine Learning Engineer, July 2024 to December 2024
- WaySense / Dr. Daniel Omeiza, Oxford Robotics Institute - Undergraduate Research Assistant, March 2024 to September 2024
- Google Developer Groups on Campus - Robotics Research Team Lead, September 2024 to August 2025
- Engineering Innovation Empowerment Foundation - Co-Founder, December 2024 to Present
- Association of Electrical and Information Engineering Students - President, September 2024 to August 2025
- Schneider Electric - Sustainability Intern, August 2023 to October 2023

Every role uses only the CV's descriptions, achievements, locations, dates, and technologies. Missing company logos remain absent rather than being replaced with invented branding.

### Publications

Replace the template Contributions feature with a purpose-built publication model and cards. Include all six CV publications/manuscripts:

1. Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods - under review at IJCAI, 2026
2. Fuzzy-PID Controller for Liquid Level Control of Tank Systems - NIPES-Journal of Science and Technology, 2025
3. Practical Trade-offs in Neural Network Optimization: Brute Force Search and Gradient Descent - Engineering Research Express, 2025
4. Enhancing Radiological Imaging for Better Healthcare Outcomes Through High Performance Hybrid Approach - ASRIC Journal on Engineering Sciences, 2024
5. Energy Optimization Algorithm for Reducing Energy Consumption in a Smart Home - IEEE ICMEAS, 2023
6. Smart Energy Metering and Monitoring System Using Internet of Things - under review at IEEE SAUPEC, 2026

Use author lists, venue/status, year, descriptions, and links from the HTML and CV. Do not transform an under-review manuscript into a published paper. Where the visible portfolio provides code, PDF, or Scholar links, retain them.

### Skills

Replace the upstream five-star cards with grouped source-backed capabilities:

- Languages: Python, SQL, C++, Rust, Java
- Machine Learning and Robotics: PyTorch, TensorFlow, JAX, MLflow, Kubeflow, FastAPI, LangChain, ROS 2, MuJoCo, CasADi
- DevOps and Cloud: Docker, Kubernetes, AWS, GCP, Terraform, GitHub Actions, Argo CD, Grafana, OpenTelemetry

Cards may retain the template's icon-led layout, but they will show category descriptions and technology chips rather than proficiency scores.

### Education, Awards, Talks, and Teaching

Display the following as compact home-page sections rather than inventing additional route types:

- Covenant University, Bachelor of Engineering in Electrical & Electronics Engineering, September 2020 to August 2025, GPA 4.85/5.0, with the quadrotor-swarms thesis title.
- First Class Honours, Pan-African Robotics Competition finalist, Founder's Award for Best WASSCE Result, and science-department valedictorian recognition with their stated years.
- Three visible-site talks: Nigerian Society of Engineers, APWEN, and Redeemer's University Electrical Engineering Students Association.
- APWEN Machine Learning Tutor, 2024 to Present, and Whitesands School Robotics Instructor, 2024.

### Contact and Resume

The Contact page will expose the source-backed email, GitHub, LinkedIn, Google Scholar, and X links. It will not submit to Google Forms, SendGrid, or another service because no credentials or destination form were supplied.

The Resume page will link or redirect directly to a copied, safely named PDF such as `/timi-owolabi-research-cv.pdf`. The browser must also be able to open the PDF directly.

## Assets

Copy only assets used by the finished site:

- `timi.jpg` for the profile portrait
- `letter-t.png` for favicon and manifest icons
- Relevant project PNG/JPEG cover images
- Relevant project MP4 files
- `Timi's Research CV.pdf`, renamed for a stable URL
- Talk PDFs linked from the visible site

Avoid copying unused legacy HTML, stylesheets, duplicate portraits, obsolete PDFs, or template sample media. Use `next/image` for raster images where practical and native `<video>` elements for local MP4s.

## Template Cleanup and Runtime Behavior

- Remove all Naman Barkiya names, usernames, social links, employer references, project records, blog posts, images, schemas, and metadata.
- Remove the GitHub template-star badge and its API route.
- Remove the Convot widget script.
- Keep Vercel Analytics because it does not require site secrets.
- Make Google Analytics optional: render it only when `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` is present, and never fail a build when it is absent.
- Remove unused form, blog, contribution, modal, and API code and their dependencies when no retained feature imports them.
- Ensure the site builds with no `.env` file. Document any optional analytics variable in `.env.copy` and README.
- Keep all seven upstream visual themes unless a theme fails contrast or rendering checks.
- Preserve responsive navigation, page transitions, animation behavior, sitemap, robots, manifest, and semantic metadata after adapting them to the retained routes.

## SEO and Accessibility

- Use `Timi Owolabi` and `Oluwatimilehin Emmanuel Owolabi` appropriately in metadata and structured person data.
- Set canonical URLs under `https://iitimii.github.io`.
- Update the sitemap to include only retained static routes and generated project and experience detail routes.
- Use descriptive image alt text derived from project titles rather than generic `img` labels.
- Give navigation controls, social links, videos, theme controls, and external links accessible labels.
- Preserve visible focus states, reduced-motion handling from the template where available, keyboard navigation, and sufficient contrast across themes.
- External links open safely with `rel="noopener noreferrer"` when a new tab is used.

## Error Handling and Empty States

- Unknown project and experience slugs redirect to their collection route or return a not-found response consistently.
- Optional media is rendered only when configured; missing videos, logos, external URLs, or PDF links do not produce broken elements.
- The contact page remains fully usable without environment variables.
- Analytics failures do not block rendering.
- Data collections are statically typed so missing required titles, descriptions, dates, or asset paths fail during type checking or build.

## Verification

Run verification from a clean dependency install:

1. `npm install`
2. `npm run lint`
3. `npm run build` with no `.env`
4. Scan source and generated output for `Naman`, `namanbarkiya`, `UBS`, `Convot`, sample blog titles, placeholder text, and template-only routes.
5. Confirm every configured local image, video, and PDF path exists.
6. Confirm all retained navigation links and generated detail URLs resolve in a local production or development server.
7. Review the home page, navigation, project list/detail, experience list/detail, publications, skills, contact, and resume link at desktop and mobile widths.
8. Check every retained theme for obvious contrast, overflow, clipping, and interaction defects.
9. Confirm the old `.hallmark` files and prior application files are absent from the final tree.

## Acceptance Criteria

- The `timi` Git repository contains the adapted upstream template and no prior Hallmark application code.
- All displayed biographical and professional claims are traceable to the visible portfolio or linked Research CV.
- All ten projects, six publications/manuscripts, eight experience/leadership entries, technical skill groups, education, four awards, three talks, and two teaching entries are represented.
- The site contains no Naman Barkiya portfolio content or nonfunctional sample sections.
- The site builds and lints without secrets or an `.env` file.
- Responsive navigation, detail pages, resume access, local media, themes, metadata, sitemap, and external links work.
- Visual review finds no broken assets, overlapping content, clipped text, severe layout shifts, or unreadable theme combinations.
